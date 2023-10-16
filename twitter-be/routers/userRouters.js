const router = require('express').Router()
const { userController } = require('../controllers')

router.post("/", userController.register)
router.get("/:id", userController.getById)
router.post("/auth", userController.login)

module.exports = router