const express = require("express");
const routes = express.Router();
const studentRoute = require("./student.route");
const adminRoute = require("./admin.route");
const facultyRoute = require("./faculty.route");
const schoolRoute = require("./school.route");
const userRoute = require("./user.route");
const { authenticate } = require("../middleweres/auth");

routes.use("/student", authenticate, studentRoute);
routes.use("/admin", adminRoute);
routes.use("/faculty", facultyRoute);
routes.use("/school", schoolRoute);
routes.use("/user", userRoute);

module.exports = routes;
