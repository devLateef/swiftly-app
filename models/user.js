const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true,
        default: 'customer'
    },
    referral: {
        type: String,
        require: false
    },
},
{
    timestamp: true
});

const userCollection = mongoose.model('User', userSchema);

module.exports = userCollection;