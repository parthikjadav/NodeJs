const express = require("express");
const { userController } = require("../controllers");
const upload = require("../middleweres/multer.middlewere");
const route = express.Router();

let uploadTowImages =  upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'coverImage', maxCount: 1 }])

route.post("/add", uploadTowImages, userController.addUser);

module.exports = route;
