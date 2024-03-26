const express = require("express");

const app = express();
const route = express.Router();

const upload = require("./controllers/multer.controller");

app.set("view engine", "ejs");
// console.log(__dirname+"./public/images")



app.use(express.urlencoded({ extended: false }));
app.use(express.json());

route.get("/", (req, res) => {
  res.render("./index");
});

route.post("/add", upload.single("uploaded_file"), (req, res) => {
  console.log(req.file, req.body);
  res.render("./index");
});

app.use(route);

app.listen(5000, () => {
  console.log("server started");
});

// const express = require('express');
// const multer = require('multer');
// const app = express();
// const route = express.Router();
// const dir = __dirname

// // console.log(dir)
// // console.log(`${dir}/tmp`)

// app.set('view engine', 'ejs');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, `${dir}/tmp`);

//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname+Date.now()+".jpg");
//   },
// });

// const upload = multer({ storage: storage });

// app.use(express.urlencoded({ extended:false}))
// app.use(express.json());

// route.get("/",(req,res)=>{
//  res.render('./index')
// })

// route.post("/add", upload.single("uploaded_file"), (req, res) => {
//   console.log(req.file, req.body);
// });

// app.use(route)

// app.listen(5000, () => {
//     console.log("server started");
// })
