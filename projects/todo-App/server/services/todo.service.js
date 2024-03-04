const { todoSchema } = require("../models")

const addTodo = (body)=>{
    return todoSchema.create(body)
}
const getTodo = ()=>{
   return todoSchema.find()
}
const removeTodo=(id)=>{
 return todoSchema.findByIdAndDelete(id)
}
module.exports = {addTodo,getTodo,removeTodo}