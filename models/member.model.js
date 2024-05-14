const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    bloodgroup: {
        type: String,
        required: true
    },
    schoolcollege: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    qualification: {
        type: String,
        required: true
    },
    jobstatus: {
        type: String,
        required: true
    },
    companyname: {
        type: String,
        required: true
    },
    phoneno: {
        type: String,
        required: true
    },
    aadharcardno: {
        type: String,
        required: true,
        unique: true
    },
    instagramid: {
        type: String,
        required: false,
        unique: false
    }
});

const Member = mongoose.model("Member", memberSchema);
module.exports = Member;
