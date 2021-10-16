const express = require('express');
const fetchuser = require('../middlewares/fetchuser');
const Group = require('../models/Group');
const router = express.Router();

const codeGenerator = () =>{

    let str = "1234567890abcdefghijklmnopqrstuvxwyz";
    let code = '';
    for(let i=0;i<6;i++)
    {
        let index = Math.floor(Math.random() * str.length); 
        code += str[index];
    }
    return code;
}


router.post('/create', fetchuser, async (req, res) => {
    try {
        let group = await Group.create({
            groupName : req.body.groupName,
            groupCode : codeGenerator(),
            owner: req.user.id
        }); 
        res.json({ success: true,group}); 
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


router.post('/join', fetchuser, async (req, res) => {
    try {
      
        let group = await Group.findOne({groupCode: req.body.groupCode});
        
        if(!group.members.includes(req.user.id))
        {
            await Group.findOneAndUpdate ({groupCode: req.body.groupCode},{$push:{members:req.user.id}});
        }
        res.json({ success: true,group}); 
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router
