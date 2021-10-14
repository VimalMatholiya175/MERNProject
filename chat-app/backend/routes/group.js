const express = require('express');
const fetchuser = require('../middlewares/fetchuser');
const Group = require('../models/Group');
const router = express.Router();

router.post('/create', fetchuser, async (req, res) => {
    try {
        let group = await Group.create({
            groupName : req.body.groupName,
            owner: req.user.id
        }); 
        res.json({ success: true,group}); 
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router
