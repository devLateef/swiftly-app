const User = require('../models/user');
const asyncHandler = require('express-async-handler');

const userReg = asyncHandler(async(req, res)=>{
    const { name, password, phone } = req.body;
    try {
        const user = await User.create({
            name,
            password,
            phone
        });
        res.json({message: 'User Created Successfully', data: user});
        
    } catch (error) {
        res.json('Error occured: ', error.message);
    };
});



module.exports = {
    userReg,
}
