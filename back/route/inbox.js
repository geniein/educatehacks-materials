const express = require('express')
const router = express.Router()
const models = require("../models");
const { Op } = require('sequelize');


router.post("/getlist", async(req, res)=>{    
    const type = req.body.type;
    const state = req.body.state;
    const inboxList = await models.Inbox.findAll({where:{
        type,
        state
    }});

    res.json(inboxList)
})

router.post("/state/:id", async (req, res)=>{
    const id = req.params.id;
    const state = req.body.state
    const result = await models.Inbox.update({state},{where:{id}});

    res.json(result);
})

router.get("/getlist", async(req, res)=>{
    const inboxList = await models.Inbox.findAll();

    res.json(inboxList)
})

router.get("/:id", async(req, res)=>{
    const id = req.params.id;    
    const inbox = await models.Inbox.findOne({where:{id}});

    res.json(inbox)
})

router.post("/post", async(req, res)=>{
    const author = req.user?.name || "ingenie";
    
    const data = {
        title: req.body.title,
        author,
        content: req.body.content,
        text: req.body.text,
        type: req.body.type,
        state: "UNCHECKED"
    }   
    const inboxPost = await models.Inbox.create(data);    

    res.json(inboxPost)
})


module.exports = router