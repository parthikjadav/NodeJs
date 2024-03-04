const mongoose=require("mongoose")

const studentSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
        trim:true
    },
    lastName:{
        type:String,
    },
    username:{
        type:String,
        trim:true,
        require:true
    },
    password:{
        type:String,
        trim:true,
        require:true
    }
})

const student = mongoose.model("studentSchema",studentSchema)

module.exports=student