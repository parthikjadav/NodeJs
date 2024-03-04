require("dotenv").config()
const express = require("express")
const http = require("http")
const bodyParser = require("body-parser")
const connectdb = require("./db/Connectdb")
const app = express()
const routes = require("./routes")  

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
//body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// route.get('/',(req,res)=>{
//     res.status(200).json({
//         message:"server load success"
//     })
// })

connectdb()

app.use("/v1",routes)

http.createServer(app).listen(process.env.PORT,()=>{
 console.log('server started');
})