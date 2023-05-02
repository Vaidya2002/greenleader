const mongoose = require("mongoose");

const leaderSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required: true
    },
    lastname: {
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    
    number:{
        type:Number,
        required: true,
        unique:true
    },
    password:{
        type:String,
        
    },
  
    address:String,
    profession:{
        type:String,
        required: false
    },
  
    companylocation:String,
    companylocation:String,
    collegeName:String,
    yearstudying:String,
    company:String,
    hobbies:String,
    award:String,
    thought:String,
    transaction:String

});

const Member = new mongoose.model("Member",leaderSchema);
module.exports = Member;