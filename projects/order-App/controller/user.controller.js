const { userService } = require("../services");

const addUser = async(req,res)=>{
 console.log(req.body);

 let user = await userService.addUser(req.body)

 res.status(200).json({success:true,user})
}

const getOrder = async(req,res)=>{

  let {id} = req.params
  let userOrder = await userService.getOrder()
  let result = userOrder.filter((item)=>  console.log(item))
  console.log(result);
  res.status(200).json({success:true,result})
}

module.exports = {addUser, getOrder}    