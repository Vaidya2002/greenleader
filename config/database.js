const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const uri = process.env.MONGO_URI || "mongodb+srv://leader-hostinger:indoleader@cluster0.zi3pbkb.mongodb.net/leaders-hostinger?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log(`connection succesfull`);
}).catch((err)=>{
    console.log(err.message);
});

