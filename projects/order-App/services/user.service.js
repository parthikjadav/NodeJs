const { userSchema, orderSchema } = require("../models")

const addUser=(user)=>{
 return userSchema.create(user)
}
const getOrder=()=>{
    return orderSchema.find().populate("userId")
}
module.exports={addUser,getOrder}