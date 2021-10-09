const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.post('/signup', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists", success: false })
        }
        user = new User(req.body);
        user.save();
        res.json({success:true})
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occured");
      }
})

router.post('/signin', [
    body('email').isEmail(),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ error: "Invalid Email or Password", success: false })
        }
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occured");
      }
})

module.exports = router;
