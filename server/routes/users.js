const express = require('express');
const router = express.Router();
const models = require('../models/index');

const jwt = require('jsonwebtoken');
const secretObj = require('../config/jwt');
const crypto = require('crypto');
const { response } = require('express');

let secret = require('../config/jwt').secret;

router.post('/인석작업url',(req,res) => {
    let token = req.cookies.user;
    let decoded = jwt.verify(token, secret);
    if(decoded){
        //작업 할 코드
    }else{
        return res.status(400).json({
            success:false,
            meessage:"권한이 없습니다"
        });
    }
})

//============================= 상세정보등록(개인) ========================================
router.post('/personRegister',(req,res) => {
   return response.status(200).json ({
        
   });
   
    userInfo = req.body;

    //정보 저장하기
    models.UserInfo.create({
        englishName: EnglishName,
        introduce: Introduce,
        height: Height,
        weight: Weight,
        sns: SNS,
        interests: Interests,
        biography: Biography,
        filmography: Filmography,
        profileFiles: ProfileFiles,
        portfolio: Portfolio
    }).then(result=>{
        return res.status(200).json({
            success:true,
            result
        });
    }).catch(e => {
        return res.status(400).json({
            success:false,
            e
        })
    });

})

//============================= 상세정보등록(기업) ========================================
router.post('/compRegister',(req,res) => {
   
})


//============================= 회원가입 ===========================================
router.post('/register', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    userInfo = req.body;
    //birthDateInfo = userInfo.birthDate.split('/');
    //userBirth = new Date(birthDateInfo[0], birthDateInfo[1] - 1, birthDateInfo[2]);
    userAge = userInfo.birthYear;
    //비밀번호 일치 여부 확인하기
    if (userInfo.password !== userInfo.passwordConfirm) {
        return res.json({
            success: false,
            message: "비밀번호가 일치하지 않습니다."
        });
    }
    //비밀번호 암호화
    var inputPassword = userInfo.password;
    var salt = Math.round((new Date().valueOf() * Math.random())) + "";
    var hashPassword = crypto.createHash('sha512').update(inputPassword + salt).digest('hex');

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
        gender: userInfo.gender,
        address: userInfo.addresses,
        telNum: userInfo.phoneNumber
    }).then(result=>{
        return res.status(200).json({
            success:true,
            result
        });
    }).catch(e => {
        return res.status(400).json({
            success:false,
            e
        })
    });

});

// =========================== 로그인 하기 ===========================
router.post('/login', async function (req, res) {
    //토큰 생성하기
    let token = jwt.sign({
        email: req.body.email + Date.now()
    },
        secretObj.secret,
        {
            //회원 로그인 60분 유지
            expiresIn: '60m'
        });

    //이메일로 회원 찾기
    var result = await models.User.findOne({
        where: {
            userId: req.body.email
        }
    });

    //가입이 안되어있는 이메일
    if (result == null) {
        return res.json({
            loginSuccess: false,
            message: "해당 이메일로 가입된 아이디가 없습니다."
        });
    }

    //입력한 비밀번호 암호화하기
    var dbPassword = result.dataValues.password;
    var inputPassword = req.body.password;
    var salt = result.dataValues.salt;
    var hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

    //비밀번호가 틀림
    if (dbPassword != hashPassword) {
        return res.json({
            loginSuccess: false,
            message: "비밀번호가 일치하지 않습니다."
        })
    } else {
        //비밀번호가 맞으면 토큰 Cookie에 저장하기
        res.cookie("user", token);
        res.cookie("id", result.dataValues.id);
        return res.json({
            loginSuccess: true,
            email: result.dataValues.email,
            name: result.dataValues.name,
            token: token
        });
    }
});

module.exports = router;