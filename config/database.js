const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://LeadersData:Lions@cluster0.zi3pbkb.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log(`connection succesfull`);
}).catch((err)=>{
    console.log(err.message);
});

