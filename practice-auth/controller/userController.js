const db = require('../models')
const User = db.User
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const handlebars = require('handlebars')
const transporter = require('../middleware/transporter')

module.exports = {
    register: async (req, res) => {
        try {
            const { username, email, password } = req.body
            const isEmailExist = await User.findOne({
                where: {
                    email
                }
            })

            if (isEmailExist) {
                return res.status(409).send({
                    message: 'email has been used'
                })
            }

            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)

            await User.create({
                username,
                email,
                password: hashPassword,
            })

            const data = fs.readFileSync('./template.html', 'utf-8')
            const tempCompile = await handlebars.compile(data)
            const tempResult = tempCompile({ username: username })

            await transporter.sendMail({
                from: 'ilham@gmail.com',
                to: email,
                subject: 'Email Confirmation',
                html: tempResult
            })

            res.status(201).send({
                message: 'register success'
            })
        } catch (err) {
            console.log(err);
            res.status(400).send({ err: err.message })
        }
    },
    getAll: async (req, res) => {
        try {
            const result = await User.findAndCountAll()
            res.status(200).send(result)
        } catch (err) {
            console.log(err);
            res.status(400).send({ err: err.message })
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body

            const isUserExist = await User.findOne({
                where: {
                    email
                }
            })
            if (isUserExist == null) {
                return res.status(404).send({
                    message: 'user not found'
                })
            }

            const isValid = await bcrypt.compare(password, isUserExist.password)
            if (!isValid) {
                return res.status(400).send({
                    message: 'incorrect password'
                })
            }

            const payload = { id: isUserExist.id, isAdmin: isUserExist.isAdmin }
            const token = jwt.sign(payload, 'JCWD0208', { expiresIn: '1h' })

            res.status(200).send({
                message: "login success",
                result: isUserExist,
                token
            })
        } catch (err) {
            console.log(err);
            res.status(400).send({ err: err.message })
        }
    },
    keeplogin: async (req, res) => {
        try {
            const result = await User.findOne({
                where: {
                    id: req.user.id
                }
            }) 
            res.status(200).send(result)
        } catch (err) {
            console.log(err);
            res.status(400).send({ err: err.message })
        }
    },
    editUser: async (req, res) => {
        try {
            await User.update(req.body, {
                where: {
                    id: req.user.id
                }
            })
            res.status(200).send("User Updated")
        } catch (err) {
            console.log(err);
            res.status(400).send({ err: err.message })
        }
    },
    editPass: async (req, res) => {
        try {
            const { password } = req.body
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)

            await User.update({ password: hashPassword }, {
                where: {
                    id: req.user.id
                }
            })
            res.status(200).send("Password Updated")
        } catch (err) {
            console.log(err);
            res.status(400).send({ err: err.message })
        }
    },
    updateImge: async (req, res) => {
        try {
            await User.update({ imgProfile: req.file?.path }, {
                where: {
                    id: req.user.id
                }
            })
            res.status(200).send('success upload')
        } catch (err) {
            console.log(err);
            res.status(400).send({ err: err.message })
        }
    }
}