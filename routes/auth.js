const router = require('express').Router()
const authControllers = require('../controllers/auth')

// Auth login
router.get("/login", authControllers.AUTH_LOGIN)

// Auth logout
router.get("/logout", authControllers.AUTH_LOGOUT)

// Check the session if user already login / logout. 
// User can directly redirect to main page if already login
router.get("/isExpired", authControllers.AUTH_EXPIRED)

// 
module.exports = router;