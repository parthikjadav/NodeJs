const express = require('express')
const { studentController } = require('../controller')
const validate = require('../middleweres/validate')
const { studentValidation } = require('../validations')
const route = express.Router()

route.post("/add",validate(studentValidation.student),studentController.addStudent)
route.get("/get",studentController.getStudent)
route.delete("/delete/:id",studentController.deleteStudent)
route.post("/update/:id",validate(studentValidation.student),studentController.updateStudent)

module.exports=route