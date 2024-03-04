const {studentService} = require("../services")

const addStudent = async (req,res)=>{
    console.log(req.body,'req body');

    let body = req.body

    let user = await studentService.addStudent(body)
     
    console.log(user);

    res.status(200).json({
        mesg:"added success fully",
        user
    })

}

const getStudent=async(req,res)=>{

 let user = await studentService.getStudent()

 res.status(200).json({
    mseg:"suceess",
    student:user
 })

}

module.exports={
    addStudent,
    getStudent
}