const router = require('express').Router()
const { studentControllers } = require('../controllers')

router.get("/", studentControllers.getAll)
router.post("/", studentControllers.register)
router.get("/:id", studentControllers.getById)
router.delete("/:id", studentControllers.deleteById)
router.patch("/:id", studentControllers.update)

module.exports = router