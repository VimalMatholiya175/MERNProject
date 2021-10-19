const express = require('express');
const authenticateUser = require('../middlewares/authenticateUser');
const Message = require('../models/Message');
const router = express.Router();

router.get('/fetchMessages/:groupId', authenticateUser, async (req, res) => {
    try {
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
        message = await Message.find({ group: message.group }).populate('user', '_id name');
        res.json({ success: true, message });

    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router
