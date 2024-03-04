const express = require("express")
const { schoolController } = require("../controller")
const validate = require("../middleweres/validate")
const { schoolValidation } = require("../validations")
const route = express.Router()

route.post("/add",validate(schoolValidation.school),schoolController.addSchool)
route.get("/get",schoolController.getSchool)
route.get("/history/:id",schoolController.getAdminHistory)

module.exports=route