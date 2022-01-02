const {check} = require("express-validator");

exports.authCredentialsValidation = [
    check("email", "Enter a valid email address").isEmail(),
    check("password", "password must be at least 6 characters").isLength({min: 6})
];