const router = require('express').Router()
const voteController = require('../controllers/voteControllers')

// Get all user
router.post("/message/:message_id/up/", voteController.VOTE_UP_FOR_MESSAGE)

// Get by user id
router.post("/message/:message_id/down/", voteController.VOTE_DOWN_FOR_MESSAGE)

// Create user
router.post("/comment/:comment_id/up/", voteController.VOTE_UP_FOR_COMMENT)

// 
router.post("/comment/:comment_id/down/", voteController.VOTE_DOWN_FOR_COMMENT)

module.exports = router;