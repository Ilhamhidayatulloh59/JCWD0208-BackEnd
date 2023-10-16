const express = require('express')
const cors = require('cors')
const PORT = 2000

const app = express()

app.use(express.json())
app.use(cors())

app.get("/api", (req, res) => {
    res.send("This is my API")
})

const { userRouter } = require('./routers')

app.use('/users', userRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})