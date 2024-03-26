const express = require("express")
const { userController } = require("../controller")
const { auth, authenticate } = require("../middleweres/auth")
const route = express.Router()

route.get("/get", authenticate, auth(["admin"]), userController.getUser)
route.post("/add", userController.addUser)

module.exports = route