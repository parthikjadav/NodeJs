const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String
    },
    mobile:{
        type:Number
    },
    age:{
        type:Number
    },
    gender:{
        type:String,
        enum:['male','female'],
        default:'male'
    }
})

const student = new mongoose.model("studentSchema",studentSchema)

module.exports = student


 