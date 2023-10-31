const { body, validationResult } = require('express-validator')

module.exports = {
    checkRegister: async (req, res, next) => {
        try {
            await body('username').notEmpty().withMessage('username required').run(req)
            await body('email').notEmpty().withMessage('email required')
                .isEmail().withMessage('invalid email').run(req)
            await body('password').notEmpty().withMessage('password required').run(req)

            const validation = validationResult(req)

            if (validation.isEmpty()) {
                next()
            } else {
                return res.status(400).send({
                    message: 'validation invalid',
                    error: validation.array()
                })
            }
        } catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
    }
}