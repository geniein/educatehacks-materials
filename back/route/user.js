const express = require('express')
const router = express.Router()
const models = require("../models");
const passport = require('passport');

//login
router.post("/login", async (req,res, next) =>{  
//passport
    passport.authenticate('local',(err, user, info)=>{ 
        console.log(err);     
        console.log(user); 
        console.log(info);  
        if(err){
            console.log(err);
            return next(err);
        }
        if(info){
            return res.status(401).json(info.reason);
        }
        return req.login(user, async (loginErr)=>{
            if(loginErr){
                console.log(loginErr);
                return next(loginErr);
            }
            return res.status(200).json(user);
        })
    })(req,res,next);
});
//get user
router.get("/user", async (req,res, next) =>{
    console.log(`session: ${req.session.user}`);
    console.log(`isAuthenticated: ${req.isAuthenticated()}`)    
    var user_info = null;
    if(!req.user){
        user_info = [];
    }else{
        user_info = JSON.parse(JSON.stringify(req.user));
    }
    res.json(user_info);
});
//
router.post('/logout', (req,res)=>{
    console.log('logout');
    if(req.isAuthenticated()){
        req.logout((err)=>{
            if(!err) req.session.save(()=>{
                //res.redirect('http://localhost:3000/'); //일반적으로 redirect
                res.json("logout"); //일반적으로 redirect
            });
        })        
    }  
});

router.get('/auth', (req,res)=>{
    if(req.isAuthenticated()){
         res.send(req.user);
     }    
});

//signup
router.post('/signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;  
    const occupation = req.body.occupation;
    models.Account.create(
        {
            email,
            password,
            name,
            occupation
        }
    ).then((result, err)=>{
        //success
        if(result){
            res.send(true);
        }        
        //fail
        if(err){
            res.send(false);
        }
    });     
})

module.exports = router