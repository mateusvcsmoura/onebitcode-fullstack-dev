const taskModel = require("../models/taskModel");

const taskController = {
    // POST /list/new-task/:id
    create: (req, res) => {
        const listId = req.params.id;
        const taskName = req.body.taskName;

        taskModel.createTask(listId, taskName);

        return res.redirect(`../${listId}`);
    },

    // POST /list/:listId/complete/:taskId
    finish: (req, res) => {
        const { listId, taskId } = req.params;
        taskModel.finishTask(listId, taskId);

        return res.redirect(`/list/${listId}`);
    },

    // POST /list/:listId/delete/:taskId
    delete: (req, res) => {
        const { listId, taskId } = req.params;
        taskModel.deleteTask(listId, taskId);

        return res.redirect(`/list/${listId}`);
    }
};

module.exports = taskController;