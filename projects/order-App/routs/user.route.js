const express = require("express");
const { userController } = require("../controller");
const route = express.Router();

route.post("/add",userController.addUser);

route.get("/:id", userController.getOrder);

module.exports = route;
