const express = require('express')
const router = express.Router()
const models = require("../models");
const { Op } = require('sequelize');

router.get("/getlist/:id", async(req, res)=>{
    console.log('here')
    const inboxId = req.params.id;
    
    const result = await models.Comment.findAll({where:{
        inboxId    
    }});

    res.json(result);
})

router.post("/post", async(req, res)=>{
    const inboxId = req.body.inboxId;
    const author = req.user?.name || "ingenie";
    const text = req.body.text;
    const comment = req.body.comment;
    
    const result = await models.Comment.create({
        inboxId,
        author,
        text,
        comment
    });

    res.json(result);
})

module.exports = router