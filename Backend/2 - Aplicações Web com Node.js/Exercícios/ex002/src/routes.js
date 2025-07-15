const express = require("express");
const router = express.Router();

const listController = require("./controllers/listController");
const taskController = require("./controllers/taskController");

// Root
router.get('/', (req, res) => {
    res.render('index');
});

// Lists Routes
router.get('/lists', listController.lists);
router.get('/new-list', listController.create);
router.post('/new-list', listController.save);
router.get('/list/:id', listController.show);
router.post('/list/delete/:id', listController.delete);

// Tasks Routes
router.post('/list/new-task/:id', taskController.create);
router.post('/list/:listId/complete/:taskId', taskController.finish);
router.post('/list/:listId/delete/:taskId', taskController.delete);

module.exports = router;