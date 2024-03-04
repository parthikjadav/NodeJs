const { adminService } = require("../srevices")

const addAdmin=async(req,res)=>{

    try{

        let body = req.body

        let {username} = body

        let alreadyExist = await adminService.alreadyExist(username)

        if(alreadyExist){
            throw new Error("admin aleredy exist")
        }
    
        let admin = await adminService.addAdmin(body)
    
        res.status(200).json({success:true,admin})

    }catch(err){
        res.status(400).json({success:false,err:err.message})
    }
}

const adminAuth=async(req,res)=>{
  try{
    let body = req.body
    let {firstName,username,password} = body 

    let auth = await adminService.adminAuth(username,password)

    if(!auth){
        throw new Error("this is not valid info")
    }
    if(auth){
    res.render("./admin",{firstName})
    }
  }catch(err){
    res.status(400).json({success:false,err:err.message})
  }
}

module.exports={addAdmin,adminAuth}