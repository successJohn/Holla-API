const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");

connectDB();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/v1/auth", require("./routes/auth"));

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT} `);
})