const mongoose = require('mongoose');

const connectDB = ()=>{
    mongoose
      .connect(
        "mongodb+srv://parthikjadav:parthik2345@cluster0.w7f0xpi.mongodb.net/orders"
      )
      .then(() => {
        console.log("DB Connected");
      });
}

module.exports = connectDB;