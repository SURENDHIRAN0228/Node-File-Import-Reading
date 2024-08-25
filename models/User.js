var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

    name: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: Number
    }
});

module.exports = mongoose.model('User', userSchema);