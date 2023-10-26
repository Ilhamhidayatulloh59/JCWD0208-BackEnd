const jwt = require('jsonwebtoken')

module.exports = {
    verifyToken: (req, res, next) => {
        try {
            let token = req.headers.authorization
            if (!token) {
                return res.status(401).send({
                    message: 'Token empty'
                })
            }
            token = token.split(' ')[1]

            let verifiedUser = jwt.verify(token, 'JCWD0208')
            req.user = verifiedUser
            next()
        } catch (err) {
            console.log(err);
            res.status(400).send(err)
        }
    },
    checkRole: (req, res, next) => {
        if (req.user.isAdmin) {
            return next()
        }
        return res.status(400).send({
            message: 'Unauthorized (admin only) !!'
        })
    }
}