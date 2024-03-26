const http = require("http");
const express = require("express");
const cloudinary = require("cloudinary").v2;
const app = express();
const route = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const connectDB = require("./db/connectdb");
const addUser = require("./controllers/profile.controller");

//set view engine
app.set("view engine", "ejs");

//body-parser
app.use(express.json());

//appp use routes
app.use(route);

route.get("/", (req, res) => {
  res.render("./index");
});

route.post("/upload", addUser)

connectDB()

http.createServer(app).listen(5000, () => {
  console.log("server started");
});
