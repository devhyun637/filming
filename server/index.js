const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const models = require('./models/index.js');

//=========================== DB 연결 ===========================
models.sequelize.sync().then(() => {
    console.log("===========================DB 연결 성공===========================");
}).catch(err => {
    console.log("=========================== DB 연결 실패===========================");
    console.log(err);
});

console.log("?");

app.use(cors());

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
//aplication/json
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());

// =========================== 라우터 ===========================
// 회원 관련
app.use('/api/users', require('./routes/users'));

app.listen(port, () => console.log(`=========================== port on ${port} ==========================`));