const { userSchema, orderSchema } = require("../models")

const addUser=(user)=>{
 return userSchema.create(user)
}
const getOrder=()=>{
 return orderSchema.find().populate("userId")
}

const loginUser = (username)=>{
 return userSchema.findOne({username})
}
module.exports={addUser,getOrder,loginUser}