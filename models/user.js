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
        type: String,
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
        require: true
    },
},
{
    timestamp: true
});

const userCollection = mongoose.model('User', userSchema);

module.exports = userCollection;