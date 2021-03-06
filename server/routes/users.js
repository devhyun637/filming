const express = require("express");
const router = express.Router();
const models = require("../models/index");

const jwt = require("jsonwebtoken");
const secretObj = require("../config/jwt");
const crypto = require("crypto");
const { response } = require("express");

let secret = require("../config/jwt").secret;

//============================= 상세정보등록(개인) ========================================
router.post("/personRegister", async (req, res) => {
  //   return response.status(200).json ({

  //   });

  let userInfo = req.body;
  let fk_userId = req.cookies.id;
  console.log(req.cookies);
  console.log(userInfo);
  //interest처리필요, fk안들어감 수정해야함
  try {
    let userResult = await models.UserInfo.create({
      englishName: userInfo.englishName,
      nickName: userInfo.nickName,
      introduce: userInfo.introduce,
      height: userInfo.height,
      weight: userInfo.weight,
      SNS_instagram: userInfo.SNS_instagram,
      SNS_facebook: userInfo.SNS_facebook,
      SNS_twitter: userInfo.SNS_twitter,
      SNS_youtube: userInfo.SNS_youtube,
      biography: userInfo.biography,
      filmography: userInfo.filmography,
      fk_userId: fk_userId,
    });

    await models.User.update(
      {
        role: userInfo.Individual,
      },
      {
        where: {
          id: fk_userId,
        },
      }
    );

    return res.status(200).json({
      success: true,
      user: userResult,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      success: false,
      error: e,
    });
  }
});

//============================= 상세정보등록(기업) ========================================
router.post("/compRegister", async (req, res) => {
  let userInfo = req.body;
  let fk_userId = req.cookies.id;
  try {
    let userResult = await models.Company.create({
      companyImage: userInfo.companyImage,
      fields: userInfo.fields[0],
      companyName: userInfo.companyName,
      introduce: userInfo.introduce,
      companyAddress: userInfo.address1 + userInfo.address2,
      site: userInfo.site,
      filmography: userInfo.filmography,
      portfolio1: userInfo.portfolio1,
      portfolio2: userInfo.portfolio2,
      portfolio3: userInfo.portfolio3,
      fk_user_id: fk_userId,
    });
    await models.User.update(
      {
        role: userInfo.Individual,
      },
      {
        where: {
          id: fk_userId,
        },
      }
    );

    return res.status(200).json({
      success: true,
      user: userResult,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      success: false,
      error: e,
    });
  }
});

//============================= 회원가입 ===========================================
router.post("/register", (req, res) => {
  userInfo = req.body;
  //birthDateInfo = userInfo.birthDate.split('/');
  //userBirth = new Date(birthDateInfo[0], birthDateInfo[1] - 1, birthDateInfo[2]);
  userAge = userInfo.birthYear;
  //비밀번호 일치 여부 확인하기
  if (userInfo.password !== userInfo.passwordConfirm) {
    return res.json({
      success: false,
      message: "비밀번호가 일치하지 않습니다.",
    });
  }
  //비밀번호 암호화
  var inputPassword = userInfo.password;
  var salt = Math.round(new Date().valueOf() * Math.random()) + "";
  var hashPassword = crypto
    .createHash("sha512")
    .update(inputPassword + salt)
    .digest("hex");

  //정보 저장하기
  models.User.create({
    userId: userInfo.email,
    password: hashPassword,
    salt: salt,
    name: userInfo.name,
    image_profile: userInfo.profile_image,
    created_at: new Date(),
    updated_at: new Date(),
    age: userAge,
    gender: userInfo.userGender,
    address: userInfo.addresses,
    telNum: userInfo.phoneNumber,
  })
    .then((result) => {
      return res.status(200).json({
        success: true,
        result,
      });
    })
    .catch((e) => {
      console.log(e);
      return res.status(400).json({
        success: false,
        e,
      });
    });
});

// =========================== 로그인 하기 ===========================
router.post("/login", async function (req, res) {
  //토큰 생성하기
  let token = jwt.sign(
    {
      email: req.body.email + Date.now(),
    },
    secretObj.secret,
    {
      //회원 로그인 60분 유지
      expiresIn: "60m",
    }
  );

  //이메일로 회원 찾기
  var result = await models.User.findOne({
    where: {
      userId: req.body.email,
    },
  });

  //가입이 안되어있는 이메일
  if (result == null) {
    return res.json({
      loginSuccess: false,
      message: "해당 이메일로 가입된 아이디가 없습니다.",
    });
  }

  //입력한 비밀번호 암호화하기
  var dbPassword = result.dataValues.password;
  var inputPassword = req.body.password;
  var salt = result.dataValues.salt;
  var hashPassword = crypto
    .createHash("sha512")
    .update(inputPassword + salt)
    .digest("hex");

  //비밀번호가 틀림
  if (dbPassword != hashPassword) {
    return res.json({
      loginSuccess: false,
      message: "비밀번호가 일치하지 않습니다.",
    });
  } else {
    //비밀번호가 맞으면 토큰 Cookie에 저장하기
    res.cookie("user", token);
    res.cookie("id", result.dataValues.id);
    return res.json({
      loginSuccess: true,
      email: result.dataValues.email,
      name: result.dataValues.name,
      token: token,
    });
  }
});

router.post("/profileInfo", async (req, res) => {
  let id = req.cookies.id;
  try {
    let info = await models.User.findOne({
      include: [{ model: models.UserInfo, where: { fk_userId: id } }],
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      success: true,
      userInfo: info,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      success: false,
      error: e,
    });
  }
});

router.get("/auth", async (req, res) => {
  let token = req.cookies.user;
  if (!token) {
    return res.status(200).json({ success: false });
  }
  let result = await jwt.verify(token, secretObj.secret);
  if (result) {
    return res.status(200).json({ success: true });
  }
  return res.status(200).json({ success: false });
});

router.get("/userInfo", async (req, res) => {
  let id = req.cookies.id;
  if (!id) {
    return res.status(401).json({ success: false, message: "login please" });
  }
  try {
    let userInfo = await models.User.findOne({
      attributes: ["address", "name"],
      include: [
        {
          model: models.UserInfo,
          attributes: [
            "introduce",
            "height",
            "weight",
            "biography",
            "filmography",
            "ppt",
            "nickName",
          ],
          where: { fk_userId: id },
        },
        // {
        //   model: models.Portfolio,
        //   attributes: ["portfolio"],
        //   where: { userId: id },
        // },
        // {
        //   model: models.UserInteresting,
        //   attributes: ["interId"],
        //   where: { userId: id },
        // },
      ],
      where: { id: id },
    });
    return res.status(200).json({ success: true, userInfo });
  } catch (e) {
    console.log(e);
    return res.status(401).json({ success: false, message: e });
  }
});

module.exports = router;
