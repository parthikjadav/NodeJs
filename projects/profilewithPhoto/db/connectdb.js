const mongoose = require('mongoose');
 
const connectDB = () => {
    mongoose.connect("mongodb+srv://parthikjadav:parthik2345@cluster0.w7f0xpi.mongodb.net/test").then(() => {
        console.log("db connection established")
        
    })
}

module.exports = connectDB;