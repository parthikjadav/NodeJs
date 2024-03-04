const {studentService} = require("../services")

const addStudent = async (req,res) => {
 console.log(req.body);
 let body = req.body
 let user = await studentService.addStudent(body)

 res.render("./index",{mesg:user})

}
const getStudent = async() =>{
    let user = await studentService.getStudent()
     
    res.status(200).json({
        mesg:"get student success",
        user
    })
}

const deleteStudent=async(req,res)=>{
try{
 let {id} = req.params
 let isAlready =await studentService.findUser(id)
 if(!isAlready){
    res.status(400).json({message:"user not found"})
 }
 let user = await studentService.deleteStudent(id)

 res.status(200).json({message:'user deleted success',user})
}catch(err)
{
    console.log(err,'err');
}
}

module.exports={addStudent,getStudent,deleteStudent,}