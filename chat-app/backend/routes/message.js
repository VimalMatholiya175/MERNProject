const express = require('express');
const authenticateUser = require('../middlewares/authenticateUser');
const Message = require('../models/Message');
const router = express.Router();

router.get('/fetchMessages/:groupId', authenticateUser, async (req, res) => {
    try {
        let messages = await Message.find({ group: req.params.groupId }, {_id: 1 });
        
        let ids = [];
        for(let item of messages){
            ids.push(item._id);
        }
        
        messages = await Message.aggregate([
            {"$match": {_id: {$in: ids }}},
            {"$lookup": {"from": "users", "localField": "user", "foreignField": "_id", "as": "user"}},
            {"$group": 
                {"_id": 
                    {
                        "day": {"$dayOfMonth": "$messageDate"},
                        "month": {"$month": "$messageDate"},
                        "year": {"$year": "$messageDate"}
                    },
                 "messageList": {"$push": "$$ROOT"}
                }
            },
            {"$project": {"_id": 0, "date": "$_id", "messageList": "$messageList"}},
            {"$sort": {"date": 1}}
        ]);

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
        message = await Message.aggregate([
            {"$match": {"_id": message._id}},
            {"$lookup": {"from": "users", "localField": "user", "foreignField": "_id", "as": "user"}}
        ])
        
        res.json({ success: true, message });
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router
