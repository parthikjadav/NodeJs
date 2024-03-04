require("dotenv").config()
const http = require("http")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const route = express.Router()
const routes = require("./routes")
const connection = require("./db/connectdb")
const { studentService } = require("./srevices")

//view engine
app.set("view engine","ejs")

//body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

route.get("/",async(req,res)=>{

    let user = await studentService.getStudent()
    res.render("./index",{messege:user})
})

route.get("/v1/admin/login",(req,res)=>{
 res.render("./adminLogin")
})

route.get("/v1/admin/add",(req,res)=>{
    res.render("./createAdmin")
   })
   
route.get("/v1/admin/auth",async(req,res)=>{
    let user = await studentService.getStudent()
    res.render("./admin",{user})
})

app.use("/v1",routes)
app.use(route)  

//conection of db
connection()

http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server started')
})