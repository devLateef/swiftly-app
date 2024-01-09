const User = require('../models/user');
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



module.exports = {
    userReg,
}
