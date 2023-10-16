const router = require('express').Router()
const { userController } = require('../controllers')
const { getTime } = require("../middleware/time")

router.get("/", getTime, userController.getAll)
router.get("/:id", getTime, userController.getById)
router.post("/", userController.register)
router.delete("/:id", userController.deleteById)
router.patch("/:id", userController.editById)

module.exports = router