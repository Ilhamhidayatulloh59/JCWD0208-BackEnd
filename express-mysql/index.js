const express = require('express')
const PORT = 2000

const app = express()
app.use(express.json())

const db = require('./database')

db.connect((err) => {
    if (err) console.log(err)
    else console.log("Mysql connected")
})

const { studentsRouters } = require('./routers')
app.use("/students", studentsRouters)

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`)
})