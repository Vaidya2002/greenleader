const express  = require("express");
const  app = express();

const bodyParser = require('body-parser');
const path = require("path");

require("./config/database");
// const Member = require("./models/member");
const { json } = require("express");

const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(static_path));
// app.use(bodyParser.urlencoded({ extended: false }))

const api = require("./routes");
const { member } = require("./controller");


app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, "/public" )));
app.use(`/api`, api);

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname + "/public/index.html"))
})
app.post("/member", member)


app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})