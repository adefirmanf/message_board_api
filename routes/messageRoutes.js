const router = require('express').Router()
const messageControllers = require('../controllers/messageControllers')

// Get all message
router.get("/", messageControllers.MESSAGE_GET)

// Get all message by id
router.get("/:id", messageControllers.MESSAGE_GET_BY_ID)

// Post message
router.post("/", messageControllers.MESSAGE_POST)

module.exports = router;