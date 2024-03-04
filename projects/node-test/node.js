const http = require("http");
const date = require("./myFirstModule")
const mymodule =  require("./testm")

console.log();
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":'text/html'})
    res.end('helloo'+date+mymodule.name);
}).listen(5000)