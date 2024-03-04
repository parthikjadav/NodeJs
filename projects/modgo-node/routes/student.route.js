const express = require("express")
const {studentController} = require("../controller")
const route = express.Router()

route.post('/add',studentController.addStudent)
route.get("/get",studentController.getStudent)

module.exports=route