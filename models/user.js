const mongoose = require('mongoose');
const userSchema  = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    emailId: {
        type: String,
    },
    password: {
        type: String,
    },
});

module.exports = mongoose.model('User', userSchema);