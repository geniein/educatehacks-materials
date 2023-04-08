const express = require('express')
const router = express.Router()
const models = require("../models");
const passport = require('passport');
const { Op } = require('sequelize');

//login
router.post("/login", async (req,res, next) =>{  
//passport
    passport.authenticate('local',(err, user, info)=>{ 
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
router.get("/auth", async (req,res, next) =>{    
    // console.log("auth: ", req.isAuthenticated());    
    if(req.isAuthenticated()){
        res.send(req.user);
    }
});
//session check
router.get('/session',(req,res)=>{
    res.json({
        "req.session": req.session,
        "req.user": req.user,
        "req.passport": req.passport
    })   
})
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

//signup
router.post('/signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;  
    const occupation = req.body.occupation;
    const isVerified = occupation == "TEACHER" ? true: false;
    models.Account.create(
        {
            email,
            password,
            name,
            occupation,
            isVerified
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

//get user list
router.get("/users", async (req, res)=>{
    const userList = await models.Account.findAll();    
    res.json(userList);
})
// user verified
router.post("/verified", async(req, res)=>{
    const isVerified = req.body.isVerified;
    const idList = req.body.selected;    
    let result = 0
    if(idList.length > 0){
        result = await models.Account.update({isVerified},{
            where: {
                id: {
                    [Op.or]: idList
                }
            }
        });   
    }    
    res.json(result);
})

module.exports = router