const { facultyService } = require("../srevices")

const addFaculty =async (req,res)=>{
  try{
      
      let body = req.body 

      let {username} = body

      let isExsist = await facultyService.findFaculty(username)

      if(isExsist){
        throw new Error("faculty already Exsist")
      }
      
      let faculty = await facultyService.addFaculty(body)
    
      res.status(200).json({sucsess:true,faculty})

  }catch(err){
    res.status(400).json({success:false,err:err.message})
  }
}

module.exports={addFaculty}