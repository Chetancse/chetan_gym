const express = require('express');
const router = express.Router();


const authController = require('../controllers/authController');
router.post('/login', authController.login);
router.post('/reg',authController.regis);
module.exports = router;