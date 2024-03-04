const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    }
    // lastName:{
    //     type:String
    // }    
})

const student = mongoose.model("studentSchema",studentSchema)

module.exports=student