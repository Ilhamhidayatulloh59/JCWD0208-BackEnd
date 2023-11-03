const router = require('express').Router()
const { User } = require('../models')

router.get('/', async (req, res) => {
    // const users = ["User 1", "User 2", "User 3"]
    const users = await User.findAll()
    res.status(200).json(users)
})

module.exports = router