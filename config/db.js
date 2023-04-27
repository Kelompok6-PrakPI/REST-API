const mongoose = require('mongoose')

const db_url = "mongodb://0.0.0.0:27017/todolist_labPI"
const db = mongoose.connect(db_url)

module.exports = db