const express = require("express");
const listController = require("./controllers/listController");
const router = express.Router();

// Root
router.get('/', (req, res) => {
    res.render('index');
});

// Lists Routes
router.get('/lists', listController.lists);
router.get('/new-list', listController.create);
router.post('/new-list', listController.save);
router.get('/list/:id', listController.show);

module.exports = router;