const { studentService } = require("../srevices");

const addStudent = async (req, res) => {
  try {
    let body = req.body;

    let isExist = await studentService.findStudent(body.username);

    if (isExist) {
      throw new Error("student Alaredy exist");
    }

    let student = await studentService.addStudent(body);

    if (!student) {
      throw new Error("student not added");
    }

    res.status(200).json({ mesg: "created success", student });
  } catch (error) {
    res.status(400).json({ success: false,  error:error.messeage });
  }
};

const getStudent = async (req, res) => {
  try {
    let student = await studentService.getStudent()
    if(!student||student.length===0)
    {
        throw new Error('student not found!')
    }
    
    res.status(200).json({ mesg: "get success", student });
  } catch (error) {
    res.status(400).json({success: false,error: error.message });
  }
};

const deleteStudent = async(req,res)=>{
    try{

      let {id} = req.params
      console.log(id);

      let student = await studentService.deleteStudent(id)

      if(!student){
        throw new Error("student dosen't exist")
      }

      res.status(200).json({success:true,mesg:"student delete success",student})

    }catch(err){

      res.status(400).json({success:false,err:err.message})

    }
}

const updateStudent=async(req,res)=>{
   try {
    let {id}=req.params 
    let body = req.body

    let student = await studentService.updateStudent(id,body)

    res.status(200).json({success:true,student:body})
}catch(err){
   res.status(400).json({success:false,err:err.message})
}
}

module.exports = {addStudent,getStudent,deleteStudent,updateStudent};
