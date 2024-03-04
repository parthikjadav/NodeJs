const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todoName:{
        type:String,
        required:true
    },
    todoDate:{
        type:String,
        required:true
    }
})

const todo = mongoose.model("todo", todoSchema)

module.exports = todo;