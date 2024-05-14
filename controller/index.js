const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const fs = require("fs");
const Contact = require('../models/contact.model');
const Member = require('../models/member.model');
const contactDetails = async (req, res, next) => {
  const { name, email, mobile, subject, message } = req.body;
  if (!name || !email || !mobile || !subject || !message) {
    res.status(400).send({
      status: "Failure",
      message: "Please fill all the fields",
    });
  } else {
    new Contact({
      name: name,
      email: email,
      mobile: mobile,
      subject: subject,
      message: message,
    })
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          status: "error",
          message: "Sorry, there was an error while submitting your message.",
        });
      });
  }
};
  

// const contactDetails = async (req, res, next) => {
//   const { name, email, mobile, subject, message } = req.body;
//   if (!name || !email || !mobile || !subject || !message) {
//     res.status(400).send({
//       status: "Failure",
//       message: "Please fill the fields",
//     });
//   } else {
//     new Contact({
//       name: name,
//       email: email,
//       mobile: mobile,
//       subject: subject,
//       message: message,
//     })
//       .save()
//       .then((result) => {
//         res.status(200).send({
//           status: "success",
//           data:"Heyyy" + result.name + "we will get in touch soon.",
//         });
//       });
//   }
// };
// const homeDetails = async (req, res, next) => {
//     const { title, subtitle, type } = req.body;
//     if (!title || !subtitle ) {
//       res.status(400).send({
//         status: "Failure",
//         message: "Please fill the fields",
//       });
//     } else {
//       new Home({
//           title: req.body.title,
//           subtitle: req.body.subtitle,
//           type:type
//       })
//         .save()
//         .then((result) => {
//           res.status(200).send({
//             status: "success",
//             message: "Your inquiry has been made",
//             data: result,
//           });
//         });
//     }
//   };

//   const savePara = async (req, res,) => {
//     const { title, sections, type } = req.body;
//     const para = new Para({
//       title:title,
//       sections:sections,
//       type:type

//     }).save().then((p)=>{
//         res.status.send({
//             message:"success",
//             data: p

//         });
//     })
  

//   };

const memberRegistration = async (req, res) => {
  console.log(req.body, "bodyyyyy")
  try {
    const {
      fullname,
      dob,
      age,
      gender,
      bloodgroup,
      schoolcollege,
      address,
      qualification,
      jobstatus,
      companyname,
      phoneno,
      aadharcardno,
      instagramid
    } = req.body;

    const newMember = new Member({
      fullname,
      dob,
      age,
      gender,
      bloodgroup,
      schoolcollege,
      address,
      qualification,
      jobstatus,
      companyname,
      phoneno,
      aadharcardno,
      instagramid
    });

    const savedMember = await newMember.save();

    // Check if the member was successfully saved
    if (savedMember) {
      // If so, send a success message
      return res.status(200).json({ message: 'Successfully submitted!' });
    }

  } catch (error) {
    if (error.code === 11000) {
      // If the error is due to a duplicate key, send an error response
      return res.status(400).json({ error: 'You are already a user!' });
    } else if (error.name === 'ValidationError') {
      console.log(error, "error")
      // If the error is due to validation, send an error response
      return res.status(400).json({ error: 'Validation error. Please check your input values and try again.' });
    } else {
      // For any other error, send an error response
      return res.status(500).json({ error: 'Internal Server Error. Please try again later.' });
    }
  }
};


 
module.exports = {
  contactDetails,
  memberRegistration
};
