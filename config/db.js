const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGO_URI
//const connectDB = mongoose.connect(MONGO_URI, {useNewUrlParser: true})
const connectDB = async() =>{
    try{
        await mongoose.connect(URI,{
        useNewUrlParser : true
            
        });
        console.log("successfully connected to database")
    }catch(error) {
            console.log("database connection failed");
            process.exit(1);
    };
    
}

module.exports = connectDB;