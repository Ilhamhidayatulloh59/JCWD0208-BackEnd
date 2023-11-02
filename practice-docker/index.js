const express = require('express')
const PORT = 2000

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(PORT, () => {
    console.log(`server running at port : ${PORT}`)
})