const listModel = require("./listModel");
const { nanoid } = require('nanoid');


// TASK -> NAME, SITUATION
const taskModel = {
    createTask: (listId, taskName) => {
        const task = {
            name: taskName,
            situation: "in progress",
            id: nanoid()
        };

        listModel.addTaskInList(listId, task);

        return task;
    },

    findTask: function (listId, taskId) {
        const currentList = listModel.getListById(listId);
        if (!currentList) return;

        const task = currentList.tasks.find(task => task.id === taskId);
        return task;
    },

    checkTasksProgress: function (listId) {
        const currentList = listModel.getListById(listId);
        let allTasks = currentList.tasks.length;
        let finishedTasks = 0;

        currentList.tasks.forEach(task => {
            if (task.situation === "done") {
                finishedTasks++;
            }
        });

        if (allTasks === finishedTasks) {
            listModel.finishList(currentList);
        }
    },

    finishTask: function (listId, taskId) {
        const currentTask = this.findTask(listId, taskId);
        currentTask.situation = "done";

        this.checkTasksProgress(listId);

        return currentTask;
    },

    deleteTask: function (listId, taskId) {
        const currentList = listModel.getListById(listId);
        const currentTask = this.findTask(listId, taskId);
        if (!currentList || !currentTask) return;

        currentList.tasks = currentList.tasks.filter(task => task.id !== currentTask.id);
        this.checkTasksProgress(listId);

        return currentTask;
    }
};

module.exports = taskModel;
