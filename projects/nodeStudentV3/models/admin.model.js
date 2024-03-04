const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
 firstName:{
    required:true,
    trim:true,
    type:String
 },
 username:{
    required:true,
    trim:true,
    type:String
 },
 password:{
    required:true,
    trim:true,
    type:String
 }
})

const admin = mongoose.model("adminSchema",adminSchema)

module.exports = admin
 