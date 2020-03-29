const router = require('express').Router()
const commentControllers = require('../controllers/commentControllers')

// Get all comment
router.get("/", commentControllers.COMMENT_GET_BY_ALL)

// Get all comment by message id
router.get("/message/:message_id", commentControllers.COMMENT_GET_BY_MESSAGE_ID)

// Post comment by message id
router.post("/message/:message_id", commentControllers.COMMENT_POST_BY_MESSAGE_ID)


module.exports = router;