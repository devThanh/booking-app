const express = require('express');
const router = express.Router();

const hotelController = require('../app/controllers/HotelController');

router.post('/create', hotelController.create)
router.put('/:id/edit', hotelController.update)
router.delete('/:id/delete', hotelController.delete)
router.patch('/:id/restore', hotelController.restore)
router.delete('/:id/deleteForce', hotelController.deleteForce)
router.get('/:slug', hotelController.getAll)
router.get('/:id/:title', hotelController.get)





module.exports = router