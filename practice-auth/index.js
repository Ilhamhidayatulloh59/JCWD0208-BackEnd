const express = require('express')
const PORT = 2000
const db = require('./models')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use('/public', express.static('./public'))

app.use("/api", (req, res) => {
    res.send("This is my API")
})

const { userRouter } = require('./router')
app.use('/users', userRouter)

app.listen(PORT, () => {
    // db.sequelize.sync({ alter: true })
    console.log(`Server running on Port : ${PORT}`);
})