const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true, 
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isActive:{
        type: Boolean,
        default:false
    },
    otp:{
        type: Number
    },
    profile:{
        type: Schema.Types.ObjectId,
        ref:"Profile"
    },
    channels:[
        {
          type: Schema.Types.ObjectId,
          ref: "Channel"       
        }
    ],
    createdAt:{
        type:Date,
        default: Date.now
    }
})

const user = mongoose.model('User',userSchema);
module.exports = user;