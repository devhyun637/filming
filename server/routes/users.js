const express = require('express');
const router = express.Router();
const models = require('../models/index');

const jwt = require('jsonwebtoken');
const secretObj = require('../config/jwt');
const crypto = require('crypto');

router.post('/register', (req, res) => {
    userInfo = req.body;
    //birthDateInfo = userInfo.birthDate.split('/');
    //userBirth = new Date(birthDateInfo[0], birthDateInfo[1] - 1, birthDateInfo[2]);
    userAge = 10;
    //비밀번호 일치 여부 확인하기
    if (userInfo.password !== userInfo.confirmpassword) {
        return res.json({
            isRegisterSuccess: false,
            message: "비밀번호가 일치하지 않습니다."
        });
    }
    //비밀번호 암호화
    var inputPassword = userInfo.password;
    var salt = Math.round((new Date().valueOf() * Math.random())) + "";
    var hashPassword = crypto.createHash('sha512').update(inputPassword + salt).digest('hex');

    //정보 저장하기
    models.User.create({
        userId: userInfo.userId,
        password: hashPassword,
        salt: salt,
        name: userInfo.name,
        image_profile: userInfo.profile_image,
        created_at: new Date(),
        updated_at: new Date(),
        age: userAge,
        gender: userInfo.gender,
        address: userInfo.address,
        telNum: userInfo.telNum
    }).then(result=>{
        console.log("회원가입");
    });

})

module.exports = router;