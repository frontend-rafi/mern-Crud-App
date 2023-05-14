const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema =new Schema({
    
 name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    createdOn:{
        type:Date,
        default:Date.now,
    },  
},
{timestamps:true});
//model
const user = mongoose.model("user",userSchema);
module.exports = user;