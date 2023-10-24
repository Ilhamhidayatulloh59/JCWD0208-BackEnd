const router = require('express').Router()
const { userController } = require('../controllers')

router.post('/', userController.register)
router.get('/', userController.getAll)
router.get('/:id', userController.getById)
router.patch('/:id', userController.editById)
router.delete('/:id', userController.deleteById)

module.exports = router