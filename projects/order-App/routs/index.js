const express = require('express');
const routes = express.Router();
const userRoute = require("./user.route")
const orderRoute = require("./order.route")

routes.use("/user",userRoute)
routes.use("/order",orderRoute)

module.exports = routes;