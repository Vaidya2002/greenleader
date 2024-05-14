const express  = require("express");
const  app = express();

const bodyParser = require('body-parser');
const path = require("path");

require("./config/database");
const { json } = require("express");

const port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: false }))

const api = require("./routes");
const { memberRegistration } = require("./controller");


app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, "/public" )));
app.use(`/api`, api);

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname + "/public/index.html"))
})
app.post("/register", memberRegistration)


app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})