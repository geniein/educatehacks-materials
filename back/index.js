//Epxress
const express = require("express");
const app = express();
//CORS
const cors = require("cors");
//DB ORM
const models = require("./models");
//parser --> request를 구분하고 req.body 객체를 생성합니다.
const bodyParser = require("body-parser");
//session
const session = require('express-session');
//passport
const passport = require('passport');
const passportConfig = require('./passport');
//router 
const userRouter = require("./route/user");
const inboxRouter = require("./route/inbox");
//upload
// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads/");
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     },
//   }),
// });

app.use(session({
    secret: "ingenie",   
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge:2400*60*60, secure: false}
}));
app.use(passport.initialize());
app.use(passport.session()); 
passportConfig();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin : ['http://localhost:3100','http://localhost:3000','http://localhost:4000'],
    // origin : '*',
    credentials : true
}));

//userRouter
app.use("/user",userRouter);
app.use("/inbox",inboxRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    // 개발 중에는 기존 테이블을 삭제하고 데이터베이스를 다시 동기화해야 할 수 있습니다. force: true다음 코드로 사용
    // db.sequelize.sync({ force: true }).then(() => {
    //   console.log("Drop and re-sync db.");
    // });
    models.sequelize
    .sync({ force: false })
    .then(
        () => {
        console.log("DB 연결 성공!");
    })
    .catch(
        (err) => {
        console.error(err);
        console.log("DB 연결 에러");
        process.exit();
    });
});