const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
        require: true,
        unique: true
    },
    phone: {
        type: Number,
        require: true,
        unique: true
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
        require: false,
        default: 'Nil'
    },
},
{
    timestamp: true
});

userSchema.pre('save', function(next){
    const user = this;
    const salt = 10
    bcrypt.hash(user.password, salt, (err, hash)=>{
        user.password = hash;
        next();
    });
});

const userCollection = mongoose.model('User', userSchema);

module.exports = userCollection;