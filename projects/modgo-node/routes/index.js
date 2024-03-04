const express = require('express')
const routes = express.Router()
const studentRoute = require("./student.route")

routes.use("/student",studentRoute)

module.exports=routes