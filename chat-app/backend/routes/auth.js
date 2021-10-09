const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jwt-then');
const { body, validationResult } = require('express-validator');

const JWT_SECRET = "Hibernate is like Mongoose (Do so)";
const router = express.Router();

router.post('/signup', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail()
], async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success: false, errors: errors.array() });
    }

    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Email already exists", success: false })
        }

        let salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);

        user = await User.create({name: req.body.name, email: req.body.email, password});
        user.save();

        res.json({success:true})
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
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
            return res.status(400).json({ error: "Invalid email or password", success: false })
        }
        
        let isValid = await bcrypt.compare(req.body.password, user.password);
        if(!isValid){
            return res.status(400).json({success: false, error: "Invalid email or password"});
        }

        const data = {
            user: {
                id: user.id
            }
        };

        const authtoken = await jwt.sign(data, JWT_SECRET);

        res.json({success : true, authtoken});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
})

module.exports = router;
