require("dotenv").config()
const express = require('express');
const app = express();
const http = require('http');
const connect = require('./db/dbconnect');
const cookieParser = require('cookie-parser');
const routes = require('./routs/index');

//body parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/v1",routes)
app.use(cookieParser());

connect()
http.createServer(app).listen(process.env.PORT,()=>{
    console.log("server started");
})
