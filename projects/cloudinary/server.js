const http = require("http");
const cloudinary = require("cloudinary").v2;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const route = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(route);
app.set("view engine", "ejs");

route.get("/", async (req, res) => {
  res.render("index");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "/public/images"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

route.post("/upload", upload.single("uploaded_file"), async (req, res) => {
  console.log(req.file, "body");
  let url = req.file.path;
  let final = await uploadToCloudinary(url);
  res.status(200).json({ final });
  // res.redirect("/");
});

cloudinary.config({
  cloud_name: "domvdald9",
  api_key: "849725769516415",
  api_secret: "YkexPg7qaNp6Jr31EmbW8XhVNXw",
});

const uploadToCloudinary = async (url) => {
  let res = await cloudinary.uploader.upload(url, { public_id: "olympic_flag" }, (error, result) => {
      fs.unlinkSync(url)
      return result.url;
    }
  );
  return res.url;
};

http.createServer(app).listen(5000, () => {
  console.log("server started");
});
