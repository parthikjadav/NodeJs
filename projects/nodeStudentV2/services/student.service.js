const {studentSchema}= require("../models")

const getStudent =()=>{
    return studentSchema.find()
}

const addStudent = (body)=>{
    return studentSchema.create(body)
}

const findUser = (id) =>{
    return studentSchema.findById(id)
}

const deleteStudent=(id)=>{
   return studentSchema.findByIdAndDelete(id)
}

module.exports={getStudent,addStudent,deleteStudent,findUser}