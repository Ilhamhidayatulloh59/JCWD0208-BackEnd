const { expenseController } = require('../controllers')

const router = require('express').Router()

router.get("/", expenseController.getAll)

module.exports = router