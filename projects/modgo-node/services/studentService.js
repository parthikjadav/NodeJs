const {studentSchema} = require("../models")

const addStudent = (body)=>{
return studentSchema.create(body)
}
const getStudent = ()=>{
    return studentSchema.find()
}

module.exports={
    addStudent,
    getStudent
}