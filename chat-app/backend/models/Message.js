const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({

    messageText : {
        type: String,
        require: true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    group:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Groups'
    },
    messageDate:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Messages',MessageSchema);
