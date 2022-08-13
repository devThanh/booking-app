const express = require('express');
const router = express.Router();
const {verifyAdmin} = require('../util/checkUser')
const authController = require('../app/controllers/AuthController');

router.post('/register', authController.register)
router.get('/login', authController.login)
router.get('/login-register', authController.show)





module.exports = router