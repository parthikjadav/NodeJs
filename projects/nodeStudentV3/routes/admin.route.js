const express = require('express')
const { adminController } = require('../controller')
const validate = require('../middleweres/validate')
const { adminValidation } = require('../validations')
const route = express.Router()

route.post("/add",validate(adminValidation.admin),adminController.addAdmin)
route.post("/auth",adminController.adminAuth)
route.post("/get",adminController.getAdmin)

module.exports=route