const express = require('express')
const { facultyController } = require('../controller')
const validate = require('../middleweres/validate')
const { facultyValidation } = require('../validations')
const route = express.Router()

route.post("/add",validate(facultyValidation.faculty),facultyController.addFaculty)

module.exports=route