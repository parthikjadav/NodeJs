const mongoose = require("mongoose")

const connectdb = () =>{
 mongoose.connect("mongodb://127.0.0.1:27017/student").then(()=>{
    console.log('db connected');
 })
}

module.exports = connectdb