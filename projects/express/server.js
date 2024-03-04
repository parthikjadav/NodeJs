const http = require('http');

const express= require("express")

const app = express()

const routes = express.Router()

const one = require("./modules/one")

let arr = [1,2,3,5,7,78]

console.log(one);

routes.get("/",(req,res,next)=>{
  res.status(200).json(arr)
})

routes.get('/profile',(req,res,next)=>{
 res.status(200).json({messege:"profile server loaded"})
})

app.use(routes)

http.createServer(app).listen(8080,()=>{
 console.log('load success');
})