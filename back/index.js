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
const passport = require('passport');
app.use(session({
    secret: "ingenie",
    // store: new redisStore({
    //   client: client,
    //   logErrors: true
    // }),
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge:2400*60*60}
}));
app.use(passport.initialize());
app.use(passport.session()); 

const port = process.env.PORT || 6060;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin : ['http://localhost:3100','http://localhost:3000','http://localhost:3001'],
    credentials : true
}));



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