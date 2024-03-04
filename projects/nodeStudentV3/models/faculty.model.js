const  mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
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

const faculty = mongoose.model("facultySchema",facultySchema)

module.exports=faculty