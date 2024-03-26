const express = require('express');
const routes = express.Router();
const userRoute = require("./user.route")
const orderRoute = require("./order.route");
const { authenticate } = require('../middleweres/auth');

routes.use("/user",authenticate,userRoute)
routes.use("/order",orderRoute)

module.exports = routes;