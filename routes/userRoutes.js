const router = require('express').Router()
const userControllers = require('../controllers/userControllers')
const guard = require("../middleware/private")

// Get all user
router.get("/", guard, userControllers.USER_GET_ALL)

// Get by user id
router.get("/:id", guard, userControllers.USER_GET_BY_ID)

// Create user
router.post("/", userControllers.USER_CREATE)

// 
module.exports = router;