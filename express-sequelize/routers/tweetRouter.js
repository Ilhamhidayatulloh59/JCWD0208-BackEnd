const router = require('express').Router()
const { tweetController } = require('../controllers')

router.post('/', tweetController.tweet)
router.get('/', tweetController.getAllTweet)
router.get('/:UserId', tweetController.getUserTweet)

module.exports = router