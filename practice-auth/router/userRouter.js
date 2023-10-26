const { userController } = require('../controller')
const { verifyToken, checkRole } = require('../middleware/auth')
const router = require('express').Router()

router.get('/', verifyToken, checkRole, userController.getAll)
router.post('/', userController.register)
router.post('/login', userController.login)
router.get('/keep-login', verifyToken, userController.keeplogin)
router.patch('/', verifyToken, userController.editUser)
router.patch('/change-pass', verifyToken, userController.editPass)

module.exports = router