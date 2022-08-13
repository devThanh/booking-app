const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');


router.put('/:id/edit', userController.update)
router.delete('/:id/delete', userController.delete)
router.delete('/:id/restore', userController.restore)
router.delete('/:id/deleteForce', userController.deleteForce)
router.get('/:id', userController.get)
router.get('/', userController.getAll)




module.exports = router