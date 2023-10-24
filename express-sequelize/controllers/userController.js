const db = require('../models')
const User = db.User

module.exports = {
    register: async (req, res) => {
        try {
            const { username, email, password } = req.body
            await User.create(req.body)
            res.status(200).send('Register Success')
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: err.message })
        }
    },
    getAll: async (req, res) => {
        try {
            const result = await User.findAll()
            res.status(200).send({ data: result })
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: err.message })
        }
    },
    getById: async (req, res) => {
        try {
            const result = await User.findOne({
                attributes: {
                    exclude: ["password"]
                },
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send({ data: result })
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: err.message })
        }
    },
    deleteById: async (req, res) => {
        try {
            const result = await User.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send({ data: result })
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: err.message })
        }
    },
    editById: async (req, res) => {
        try {
            const result = await User.update(
                req.body,
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            res.status(200).send({ data: result })
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: err.message })
        }
    },
}