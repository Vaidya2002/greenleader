// const { Contact } = require("../models");
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

const member = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      number,
      dob,
      address,
      profession,
      collegeName,
      yearstudying,
      company,
      hobbies,
      award,
      collegelocation,
      companylocation,
      thought,
      password,
      transaction
    } = req.body;

    const memberSignup = new Member({
      firstname,
      lastname,
      email,
      number,
      dob,
      address,
      profession,
      collegeName,
      yearstudying,
      company,
      hobbies,
      award,
      collegelocation,
      companylocation,
      thought,
      password,
      transaction
    });

    const createMember = await memberSignup.save();
    res.redirect("/?message=success");

  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).send({
        status: "error",
        message: "Sorry, there was an error while creating the member. Please check your input values and try again.",
        error: error.message
      });
    } else {
      console.log(error);
      res.status(500).send({
        status: "error",
        message: "Sorry, there was an error while creating the member. Please try again later.",
        error: error.message
      });
    }
  }
};

 
module.exports = {
  contactDetails,
  member
};
