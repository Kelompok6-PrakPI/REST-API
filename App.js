const express = require('express')
const db = require('./config/db')
const app = express()

const ALLROUTE = require('./routes')


app.use(express.json())

db.then(() => {
    console.log('success connect to db');
}).catch((err) => {
    console.log(err);
})

const port = 3000


app.use(ALLROUTE)
app.listen(port, () => console.log(`App listening on port ${port}!`))