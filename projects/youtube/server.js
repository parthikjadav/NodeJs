require("dotenv").config();
const http = require("http");
const express = require("express");
const connectDB = require("./db/connectDB");
const routes = require("./routes");
const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use("/v1", routes);

//view Engine
app.set('view engine','ejs')

app.get("/api", (req, res) => {
  res.render("./index");
});


connectDB();

http.createServer(app).listen(process.env.PORT, () => {
  console.log("server is running on port 5000");
});
