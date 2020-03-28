const router = require('express').Router()
const commentControllers = require('../controllers/comments')

// Get all comment
router.get("/", commentControllers.COMMENT_GET)

// Get all comment by message id
router.get("/message/:id", commentControllers.COMMENT_GET_BY_MESSAGE_ID)

// Post comment by message id
router.post("/message/:id", commentControllers.COMMENT_POST_BY_MESSAGE_ID)


module.exports = router;