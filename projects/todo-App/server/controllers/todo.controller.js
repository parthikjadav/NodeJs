const {todoService}  = require("../services")

const addTodo=async(req,res)=>{
  let todo = await todoService.addTodo(req.body)

  res.status(201).json({success:true,todo})
}
const getTodo=async(req,res)=>{

 let todo = await todoService.getTodo()
 res.status(200).json({success:true,todo})
}

const removeTodo=async(req,res)=>{
    let {id} = req.params
    // console.log(id);
    let todo = await todoService.removeTodo(id)
    res.status(200).json({success:true,todo})
}

module.exports = {addTodo,getTodo,removeTodo}