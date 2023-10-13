const express = require('express')
const PORT = 2000

const app = express()

// agar express bisa nerima body
app.use(express.json())

app.get("/api", (req, res) => {
    res.send("This is my API")
})

const { userRouter } = require('./routers')

app.use("/users", userRouter)

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})