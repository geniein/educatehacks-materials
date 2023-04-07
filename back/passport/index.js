const passport =require('passport');
const local = require('./local');

module.exports = () =>{
    passport.serializeUser((user, done)=>{
        console.log('serializeUser: ', user)
        done(null, user.email)
    });
    passport.deserializeUser(async (id, done)=>{
        console.log('deserializeUser')
        done(null,id);
    });
    local();
}