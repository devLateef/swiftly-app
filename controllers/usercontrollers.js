const User = require('../models/user');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');

const userReg = asyncHandler(async(req, res)=>{
    console.log(req.body);
    const { 
        firstname, 
        surname, 
        email, 
        phone, 
        password,
        referral 
    } = req.body;
    try {
        const user = await User.create({
            firstname,
            surname,
            email,
            phone,
            password,
            referral
        });
        res.json({message: 'User Created Successfully', data: user});
        
    } catch (error) {
        res.json({message: error.message});
    };
});

const getAllUser = asyncHandler(async(req, res)=>{
    const users = await User.find({});
    res.status(200).json(users);
});

const loggedInUser = asyncHandler(async(req, res)=>{
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if(user){
        const same = await bcrypt.compare(password, user.password);
        if(same){
            res.status(200).json({message: "User Successfully Loggedin", data: user});
        }else{
            res.status(400).json({message: "Invalid Credentials"});
        };
    }else{
        res.status(400).json({message: "User Not Found"});
    };
})



module.exports = {
    userReg,
    getAllUser,
    loggedInUser,
}
