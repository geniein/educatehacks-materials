module.exports = {
  postgres:{
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "postgres", // postgres 초기 설정한 비밀번호
    DB: "postgres",
    "dialect": "postgres",    
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  sqlite: {
    "dialect": "sqlite",
    "storage": "./database.sqlite3"
  }
     
};
   