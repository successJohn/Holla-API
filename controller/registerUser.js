const {validationResult} = require("express-validator");
const bcrypt = require("bcrypt");
const User = require("../model/User");

exports.registerUser = async function(req, res){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password} = req.body;

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const otp = Math.floor(1 * Math.random() * 9000);

    const user = new User({
        email,
        password: hashedPassword,
        otp
    })

    //save the user
    try{
        await user.save();
        res.status(201).json({msg: "Registration successful"})
    }catch(err){
        if(err.code === 11000){
            return res.status(400).json({msg: "User already exists"})
        }
        return res.status(500).json({msg: "Server error"});
    }

}
