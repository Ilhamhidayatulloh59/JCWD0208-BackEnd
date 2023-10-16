const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./database/user.json', 'utf-8'))

module.exports = {
    register: (req, res) => {
        const id = data.length ? Math.max(...data.map(item => item.id)) + 1 : 1
        req.body.id = id
        data.push(req.body)
        fs.writeFileSync('./database/user.json', JSON.stringify(data), 'utf-8')
        res.status(200).send("Register success")
    },
    login: (req, res) => {
        const { email, password } = req.body
        const result = data.filter(item => item.email == email  && item.password == password )
        if (result.length == 1) {
            res.status(200).send(result)
        } else {
            res.status(400).send({ message: 'User not found' })
        }
    },
    getById: (req, res) => {
        const result = data.filter(item => item.id == req.params.id)
        if (result.length == 1) {
            res.status(200).send(result[0])
        } else {
            res.status(400).send({ message: 'User not found' })
        }
    },
}