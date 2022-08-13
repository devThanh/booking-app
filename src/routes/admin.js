const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController')





//router.use('/:slug/hotel', siteController.search)
router.get('/create', adminController.create)
router.post('/create/save', adminController.store)
router.get('/admin', adminController.storedCity)
router.get('/trash', adminController.trashCity)

router.get('/edit/:id/city', adminController.editCity)
router.get('/edit/:id/hotel', adminController.editHotel)

router.put('/:id/edit', adminController.update)
router.delete('/:slug', adminController.delete)
router.patch('/:slug/restore', adminController.restore)
router.delete('/:slug/deleteForce', adminController.deleteForce)





//router.get('/', adminController.show); 






module.exports = router;