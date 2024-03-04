require('dotenv').config()
const http = require("http")
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const finalPath = path.join(__dirname,'index.html')
 
const route = express.Router();

route.get('/',(req,res)=>{
    res.sendFile(finalPath)
})

route.post("/add",(req,res)=>{
 console.log(req.body);

 res.status(200).json({
    mesg:"added success",
    data:req.body
 })
})

app.use(route)

http.createServer(app).listen(process.env.PORT,()=>{
 console.log("server loaded");
})