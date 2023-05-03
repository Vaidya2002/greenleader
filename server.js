const express  = require("express");
const  app = express();

const bodyParser = require('body-parser');


// Use body-parser to parse incoming request bodies

// const path = require("path");
// const hbs = require("hbs");
require("./config/database");
// const Member = require("./models/member");
const { json } = require("express");

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(static_path));
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})
const api = require("./routes");
const Member = require("./models/member.model");

app.use(`/api`, api);
app.post("/createmember", async (req, res)=>{
    try {
      
           
      

       

            const memberSignup = new Member({
                 firstname : req.body.firstname,
                 lastname : req.body.lastname,
                 email : req.body.email,
                 number : req.body.number,
                 dob : req.body.dob,
                 address:req.body.address,
                 profession: req.body.profession,
                 collegeName:req.body.collegeName,
                 yearstudying:req.body.yearstudying,
                 company:req.body.company,
                 hobbies:req.body.hobbies,
                 award:req.body.award,
                 collegelocation:req.body.collegelocation,
                 companylocation:req.body.companylocation,
                 thought:req.body.thought,
                 password:req.body.password,
                 transaction:req.body.transaction,
            });
            
            const createMember = await memberSignup.save();
            res.redirect("/?message=success");


    } catch(error){
        res.status(400).send(error) 
    }
});



app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})