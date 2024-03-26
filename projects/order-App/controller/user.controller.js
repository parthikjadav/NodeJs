const { createCookie } = require("../middleweres/auth");
const { userService } = require("../services");

const addUser = async(req,res)=>{
 console.log(req.body);

 let user = await userService.addUser(req.body)

 res.status(200).json({success:true,user})
}

const getOrder = async(req,res)=>{

  let {id} = req.params
  let userOrder = await userService.getOrder()
  let result = userOrder.filter((item)=>  item.userId._id == id)
  console.log(result);
  res.status(200).json({success:true,result})
}

const loginUser = async(req,res)=>{
  try{
    let {username,password} = req.body
    let user =await userService.loginUser(username)
    
    
    if(!user){
      throw new Error('Invalid username')
    }else{

      if(user.password == password){
        let singOBJ = {
          id:user._id,
          name:user.name,
          username:user.username
        }
        let token = createCookie(singOBJ)
        res.cookie("token",token)
        return res.status(200).json({success:true,token})
      }else{
        return res.status(400).json({success:false,message:"Invalid password"})
      }
    }
  }catch(err){
    return res.status(400).json({success:false,err:err.message})
  }
  
  
}

module.exports = {addUser, getOrder,loginUser}    