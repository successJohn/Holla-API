const express = require("express");

const route = express.Router();
const {authCredentialsValidation} = require("../middleware/authValidation");
const {registerUser}= require("../controller/registerUser");

route.post("/register", authCredentialsValidation,registerUser);

module.exports = route;