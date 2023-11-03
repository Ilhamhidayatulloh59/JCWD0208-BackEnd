const express = require('express')
const PORT = 4000

const app = express()

const userRouter = require('./router/user')

app.use('/api/users', userRouter)

app.listen(PORT, () => {
    console.log(`Server running at port : ${PORT}`);
})

module.exports = app