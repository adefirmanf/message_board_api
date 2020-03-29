const router = require('express').Router()
const messageControllers = require('../controllers/messageControllers')
const guard = require("../middleware/private")
// Get all message
router.get("/", guard, messageControllers.MESSAGE_GET_ALL)

// Get all message by id
router.get("/:id", guard, messageControllers.MESSAGE_GET_BY_ID)

// Post message
router.post("/", guard, messageControllers.MESSAGE_POST)

module.exports = router;