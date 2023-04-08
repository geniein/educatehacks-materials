const passport = require('passport');
const {Strategy: LocalStrategy} = require('passport-local');
const bcrypt = require('bcrypt');
const models = require('../models');

module.exports = () =>{
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async(email, password, done)=>{
  try{
    const user = await models.Account.findOne({
      where:{email: email}
    });    
    if(!user){
      return done(null, false, {reason: "Not Exist"});
    }    
    // const result = await bcrypt.compare(password, user.password);
    // console.log(result);
    if(password === user.password){      
      return done(null, user);    
    }
    return done(null, false, {reason:"Wrong Password"});
  } catch (err){
    console.log(err);
    return done(err);
  }
}));
}