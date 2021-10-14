const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({

    groupName : {
        type: String,
        require: true
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    members:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }]
})
module.exports = mongoose.model('Groups',GroupSchema);
