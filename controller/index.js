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

    // Check if the member was successfully saved
    if (createMember) {
      // If so, show a success message in a dialog box
      return res.status(200).send(`
        <script>
          alert("Successfully submitted!");
          window.location.href = "/home";
        </script>
      `);
    }

  } catch (error) {
    if (error.code === 11000) {
      // If the error is due to a duplicate key, show an error message in a dialog box
      return res.status(400).send(`
        <script>
          alert("You are already a user!");
          window.location.href = "/home";
        </script>
      `);
    } else if (error.name === 'ValidationError') {
      // If the error is due to validation, show an error message in a dialog box
      return res.status(400).send(`
        <script>
          alert("Sorry, there was an error while creating the member. Please check your input values and try again.");
          window.location.href = "/home";
        </script>
      `);
    } else {
      // For any other error, show an error message in a dialog box
      return res.status(500).send(`
        <script>
          alert("Sorry, there was an error while creating the member. Please try again later.");
          window.location.href = "/home";
        </script>
      `);
    }
  }
};


 
module.exports = {
  contactDetails,
  member
};
