require("dotenv").config()
const http = require("http")
const express = require("express")
const bodyParser = require("body-parser")

const route = express.Router()
const app = express()

//body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

//home route
route.get("/",(req,res)=>{
    res.status(200).json({
        mesg:"server loaded"
    })
})

app.use(route)

//create server
http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server started');
})