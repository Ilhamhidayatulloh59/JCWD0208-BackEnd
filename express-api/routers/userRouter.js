const router = require('express').Router()
const { userController } = require('../controllers')

router.get("/", userController.getAll)
router.get("/:id", userController.getById)
router.post("/", userController.register)
router.delete("/:id", userController.deleteById)
router.patch("/:id", userController.editById)

module.exports = router