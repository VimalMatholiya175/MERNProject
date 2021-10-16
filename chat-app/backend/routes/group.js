const express = require('express');
const fetchuser = require('../middlewares/fetchuser');
const Group = require('../models/Group');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();

const codeGenerator = () =>{

    let str = "1234567890abcdefghijklmnopqrstuvxwyz";
    let code = '';
    for(let i=0; i<6; i++)
    {
        let index = Math.floor(Math.random() * str.length); 
        code += str[index];
    }
    return code;
}


router.post('/create', fetchuser, [
    body('groupName').isLength({ min: 3, max: 20 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success: false, errors: errors.array() });
    }

    try {
        let group = await Group.create({
            groupName : req.body.groupName,
            groupCode : codeGenerator(),
            owner: req.user.id,
            members: [req.user.id]
        });

        await User.findOneAndUpdate({ _id: req.user.id}, {$push: {groups: group._id}});

        res.json({ success: true, group}); 
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
})


router.post('/join', fetchuser, [
    body('groupCode').isLength({ min: 6, max: 6 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success: false, errors: errors.array() });
    }

    try {
        let group = await Group.findOne({groupCode: req.body.groupCode});
        if(!group.members.includes(req.user.id))
        {
            await Group.findOneAndUpdate({groupCode: req.body.groupCode}, {$push: {members: req.user.id}});
            await User.findOneAndUpdate({ _id: req.user.id}, {$push: {groups: group._id}});
        }

        res.json({ success: true, group}); 
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

router.get('/fetchAllGroups', fetchuser, async (req, res) =>{
    try{

        let user = await User.findOne({_id: req.user.id});
        let groupIds = user.groups;

        let groups = [];

        for(let groupId of groupIds){
            let group = await Group.findOne({_id: groupId});
            groups.push(group);            
        }
        res.json({success: true, groups});

    }
    catch(error){
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router
