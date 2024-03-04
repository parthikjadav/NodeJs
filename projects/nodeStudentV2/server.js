require("dotenv").config()
const bodyParser = require("body-parser")
const express = require("express")
const http = require("http")
const connectdb = require("./db/connect.db")
const routes = require("./routes")
const { studentService } = require("./services")
const app = express()

//body-parser 
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// routes use
app.use("/v1",routes)

//ejs setup
app.set("view engine","ejs")

app.get("/",async(req,res)=>{

    let user = await studentService.getStudent()

    res.render("./index",{mesg:user})
})

connectdb()

http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server started');
}) 