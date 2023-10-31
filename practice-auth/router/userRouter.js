const { userController } = require('../controller')
const { verifyToken, checkRole } = require('../middleware/auth')
const { multerUpload } = require('../middleware/multer')
const { checkRegister } = require('../middleware/validator')
const router = require('express').Router()

router.get('/', verifyToken, checkRole, userController.getAll)
router.post('/', checkRegister, userController.register)
router.post('/login', userController.login)
router.get('/keep-login', verifyToken, userController.keeplogin)
router.patch('/', verifyToken, userController.editUser)
router.patch('/change-pass', verifyToken, userController.editPass)
router.patch('/change-img', verifyToken, multerUpload().single('file'), userController.updateImge)

module.exports = router