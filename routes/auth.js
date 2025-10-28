// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { registerValidation, loginValidation } = require('../validators/authValidators');
const authMiddleware = require('../middleware/authMiddleware');

// register
router.post('/register', registerValidation, authController.register);

// login
router.post('/login', loginValidation, authController.login);

// profile (protected)
router.get('/profile', authMiddleware.verifyToken, authController.getProfile);

module.exports = router;
