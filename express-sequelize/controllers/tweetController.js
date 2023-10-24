const db = require('../models')
const Tweet = db.Tweet
const User = db.User

module.exports = {
    tweet: async (req, res) => {
        try {
            const { tweet, UserId } = req.body
            await Tweet.create({
                tweet,
                UserId
            })
            res.status(200).send("Success Tweet")
        } catch (err) {
            console.log(err)
            res.status(400).send({ message: err.message })
        }
    },
    getAllTweet: async (req, res) => {
        try {
            const result = await Tweet.findAndCountAll({
                include: [
                    {
                        model: User,
                        attributes: ['username', 'email']
                    }
                ]
            })
            res.status(200).send({ data: result })
        } catch (err) {
            console.log(err)
            res.status(400).send({ message: err.message })
        }
    },
    getUserTweet: async (req, res) => {
        try {
            const result = await Tweet.findAndCountAll({
                include: [
                    {
                        model: User,
                        attributes: ['username', 'email']
                    }
                ],
                where: {
                    UserId: req.params.UserId
                }
            })
            res.status(200).send({ data: result })
        } catch (err) {
            console.log(err)
            res.status(400).send({ message: err.message })
        }
    }
}