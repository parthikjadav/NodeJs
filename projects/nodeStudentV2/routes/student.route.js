const express = require("express")
const {studentController} = require("../controller")
const route = express.Router()

route.post("/add",studentController.addStudent)
route.get("/get",studentController.getStudent)
route.post("/delete/:id",studentController.deleteStudent)

module.exports=route