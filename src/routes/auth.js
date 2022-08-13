const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/AuthController')
const { verifyToken} = require('../../src/util/verifyToken')
const { verifyUser, verifyAdmin} = require('../../src/util/checkUser')
const { createError} = require('../../src/util/error')





router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/admin', verifyAdmin, (req,res,next)=>res.render('admin/admin'))

module.exports = router