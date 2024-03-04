const http = require("http")
const express = require("express")
const routes = express.Router()
const app = express()

routes.get("/",(req,res,next)=>{
 res.status(200).json({messege:"home server Loaded"})
})

app.use(routes)

http.createServer(app).listen(8080,()=>{
 console.log("server loaded")
})