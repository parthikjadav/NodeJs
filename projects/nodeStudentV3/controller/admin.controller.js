const { createToken } = require("../middleweres/auth")
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
    let {username,password} = body 

    let auth = await adminService.adminAuth(username)

    if(!auth){
        throw new Error("this is not valid info")
    }
     
    if(password==auth.password){
      let newobj = {
        id:auth.id,
        username:auth.username
      }
      let token = createToken(newobj)
      res.cookie("token",token)
      res.status(200).json({success:true,token})
    }else{
      res.status(400).json({success:false,mesg:"invalid password"})
    }
  }catch(err){
    res.status(400).json({success:false,err:err.message})
  }
}

const getAdmin = async (req, res) => {
  
  let admin = await adminService.getAdmin()

  res.status(200).json({success:true,admin:admin})
  
}

module.exports = {
  addAdmin,
  adminAuth,
  getAdmin
}