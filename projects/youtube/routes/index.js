const express = require("express");
const routes = express.Router();
const userRoute = require("./user.route")
const videoRoute = require("./video.route")

routes.use("/user",userRoute)
routes.use("/video",videoRoute)

module.exports = routes;
