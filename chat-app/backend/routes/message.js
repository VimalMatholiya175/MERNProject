const express = require('express');
const fetchuser = require('../middlewares/fetchuser');
const Group = require('../models/Group');
const Message = require('../models/Message');
const User = require('../models/User');
const router = express.Router();

router.get('/fetchMessages/:groupId', fetchuser, async (req, res) =>{
    try{
        let messages = await Message.find({group: req.params.groupId});
        
        res.json({success: true, messages});

    }
    catch(error){
        res.status(500).send("Internal Server Error");
    }
})

router.post('/sendMessage', fetchuser, async (req, res) =>{
    try{
        let message = await Message.create({
            messageText: req.body.message,
            user: req.user.id,
            group: req.body.groupId
        });
        
        res.json({success: true, message});

    }
    catch(error){
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router
