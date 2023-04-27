const express = require('express')
const router = express.Router()

const {
    getAllTodo,
    getTodoByID,
    deleteTodoByID,
    deleteAllTodo,
    updateTodoByID,
    addTodo,
}= require ('../controller/todo.controller')

router.get('/', getAllTodo)
router.get('/:id', getTodoByID)
router.delete('/:id', deleteTodoByID)
router.delete('/', deleteAllTodo) 
router.put('/:id',updateTodoByID)
router.post('/', addTodo)

module.exports = router