const express = require('express')
const router = express.Router()

const todoRouter = require('./todo.router')


router.use("/todo" ,todoRouter)

module.exports = router