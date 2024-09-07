// routes/registerRoutes.js
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const registerController = require('../controllers/registerController');

// Validation middleware
const registrationValidation = [
  body('firstName').notEmpty(),
  body('lastName').notEmpty(),
  body('email').isEmail(),
  body('address').notEmpty(),
  body('phoneno').notEmpty(),
  body('gender').notEmpty(),
];

// Registration route
router.post('/register', registrationValidation, registerController.registerUser);

module.exports = router;