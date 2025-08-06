// API route definitions for user-related endpoints
//  Sets up routes for user-related actions (e.g., POST /register, POST /login).

const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
// Add more routes for getting user, updating user, etc.

module.exports = router;