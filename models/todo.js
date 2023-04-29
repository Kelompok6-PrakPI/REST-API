const mongoose = require('mongoose')

const { Schema } = mongoose 

const todoSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    deadline: {
        type: date,
        required: true
    },
    isDone:{
        type:Boolean,
        required: true
    }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo