const router = require('express').Router()
const userControllers = require('../controllers/userControllers')

// Get all user
router.get("/", userControllers.USER_GET_ALL)

// Get by user id
router.get("/:id", userControllers.USER_GET_BY_ID)

// Create user
router.post("/", userControllers.USER_CREATE)

// 
module.exports = router;