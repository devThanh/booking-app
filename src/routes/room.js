const express = require('express');
const router = express.Router();

const roomController = require('../app/controllers/RoomController');

router.post('/:hotelid', roomController.create)
router.put('/:id/edit', roomController.update)
router.delete('/:id/delete', roomController.delete)
router.patch('/:id/restore', roomController.restore)
router.delete('/:id/:hotelid/deleteForce', roomController.deleteForce)
router.get('/:id', roomController.get)
router.get('/', roomController.getAll)




module.exports = router