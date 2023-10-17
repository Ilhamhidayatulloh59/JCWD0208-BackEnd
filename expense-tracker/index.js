const express = require('express')
const PORT = 2000

const app = express()
app.use(express.json())

const { expenseRouter } = require('./routers')
app.use("/expense", expenseRouter)

app.listen(PORT, () => {
    console.log(`Server running at port : ${PORT}`);
})