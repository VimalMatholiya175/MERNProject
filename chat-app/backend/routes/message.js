const express = require('express');
const authenticateUser = require('../middlewares/authenticateUser');
const Message = require('../models/Message');
const router = express.Router();

router.get('/fetchMessages/:groupId', authenticateUser, async (req, res) => {
    try {
        // let msgs = await Message.find({ group: req.params.groupId });
        
        // let ids = [];
        // for(var item of msgs){
        //     ids.push(item._id);
        // }
        
        // let x = await Message.aggregate([
        //     {"$match": {_id: {$in: ids }}},
        //     {"$lookup": {"from": "Users", "localField": 'user', "foreignField": '_id', "as": 'user'}},
        //     {"$group": 
        //         {"_id": 
        //             {
        //                 "day": {"$dayOfMonth": "$messageDate"},
        //                 "month": {"$month": "$messageDate"},
        //                 "year": {"$year": "$messageDate"}
        //             },
        //          "messageList": {"$push": "$$ROOT"}
        //         }
        //     }
        // ]);

        // await Message.populate(x, {path: "user"});

        // console.log(x[0].messageList);

        let messages = await Message.find({ group: req.params.groupId }).populate('user', '_id name');
        res.json({ success: true, messages });

    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

router.post('/sendMessage', authenticateUser, async (req, res) => {
    try {
        let message = await Message.create({
            messageText: req.body.message,
            user: req.user.id,
            group: req.body.groupId
        });
        message = await Message.findOne({ _id: message._id }).populate('user', '_id name');
        res.json({ success: true, message });

    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router
