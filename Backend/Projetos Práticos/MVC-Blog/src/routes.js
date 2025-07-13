const express = require("express");
const postsController = require("./controllers/postsController");
const adminController = require("./controllers/adminController");
const router = express.Router();

// Blog Routes
router.get('/', postsController.index);
router.get('/posts/:id', postsController.show);

// Admin Routes
router.get('/admin', adminController.index);
router.get('/admin/create', adminController.create);
router.post('/admin/create', adminController.save);
router.get('/admin/edit/:id', adminController.edit);
router.post('/admin/update/:id', adminController.update);
router.post('/admin/delete/:id', adminController.delete);

module.exports = router;