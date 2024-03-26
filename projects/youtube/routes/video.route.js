const express = require("express");
const { videoController } = require("../controllers");
const upload = require("../middleweres/multer.middlewere");
const route = express.Router();

let uploadTowImages =  upload.fields([{ name: 'videoURL', maxCount: 1 }, { name: 'videoThumbnail', maxCount: 1 }])

route.post("/add",uploadTowImages,videoController.addVideo);
route.get("/get",videoController.getVideo);

module.exports = route;
