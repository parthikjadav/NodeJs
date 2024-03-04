const studentRoute=require("./student.route")
const express = require("express")
const routes = express.Router()

routes.use("/student",studentRoute)

module.exports=routes