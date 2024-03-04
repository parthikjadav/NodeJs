require("dotenv").config()
const http = require("http")
const express = require("express")
const route = express.Router()
const app = express()
const connectDB = require("./dbConnect/db")
const cors = require("cors")
const { todoController } = require("./controllers")


app.use(express.json())
app.use(cors())

route.get("/get",todoController.getTodo);
route.post("/add",todoController.addTodo);
route.delete("/:id",todoController.removeTodo);

app.use("/todo",route)

connectDB()

http.createServer(app).listen(process.env.PORT,()=>{
    console.log("Server is running at port 5000")
})