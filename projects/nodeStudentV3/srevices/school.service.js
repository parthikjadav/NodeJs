const { schoolSchema, adminSchema } = require("../models")

const addSchool=(body)=>{
 return schoolSchema.create(body)
}

const getSchool = ()=>{
    return schoolSchema.find()
}

const getAdmin = (id)=>{
    return adminSchema.findById(id)
}

const getAdminHistory =()=>{
   return schoolSchema.find().populate("admin")
}

module.exports={addSchool,getSchool,getAdmin,getAdminHistory}