const express = require("express");
const { userController } = require("../controller");
const route = express.Router();

route.post("/add",userController.addUser);

route.post("/login",userController.loginUser)
route.get("/:id", userController.getOrder);

module.exports = route;
