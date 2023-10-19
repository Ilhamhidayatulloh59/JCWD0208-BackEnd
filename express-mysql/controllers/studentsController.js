const db = require('../database')

module.exports = {
    getAll: (req, res) => {
        db.query("Select * From Students", (err, result) => {
            if (err) res.status(400).send({ message: err.message })
            else res.status(200).send({
                status: "Success",
                data: result
            })
        })
    },
    getById: (req, res) => {
        const { id } = req.params

        db.query(`Select * From Students Where id = ${id}`, (err, result) => {
            if (err) res.status(400).send({ message: err.message })
            else res.status(200).send({
                status: "Success",
                data: result
            })
        })
    },
    deleteById: (req, res) => {
        const { id } = req.params

        db.query(`Delete From Students Where id = ${id}`, (err, result) => {
            if (err) res.status(400).send({ message: err.message })
            else res.status(200).send({
                status: "Success",
                data: result
            })
        })
    },
    register: (req, res) => {
        const { name, age, address, gender } = req.body

        db.query(`insert into Students (name, age, address, gender) values (
            ${db.escape(name)}, ${db.escape(age)}, ${db.escape(address)}, ${db.escape(gender)}
        )`, (err, result) => {
            if (err) res.status(400).send({ message: err.message })
            else res.status(200).send({
                status: "Success",
                data: result
            })
        })
    },
    update: (req, res) => {
        const { id } = req.params
        const query = []

        for (const key in req.body) {
            query.push(`${key} = ${db.escape(req.body[key])}`)
        }

        db.query(`Update Students Set ${query.join(", ")} Where id = ${id}`, (err, result) => {
            if (err) res.status(400).send({ message: err.message })
            else res.status(200).send({
                status: "Success",
                data: result
            })
        })
    },
}