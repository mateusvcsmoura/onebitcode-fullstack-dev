const { nanoid } = require('nanoid');

let lists = [
    { id: "1", name: "Example Task List", description: "This an example of a Task List.", tasks: [{ name: "You can create many tasks as you want.", situation: "in progress", id: nanoid() }, { name: "Thank you for using Node Productive", situation: "done", id: nanoid() }], situation: "in progress", createdAt: new Date() }
];

const listModel = {
    getAllLists: () => {
        return lists;
    },

    getListById: (id) => {
        return lists.find(list => list.id === id) || false;
    },

    createList: (listName, description) => {
        const newList = {
            name: listName,
            description,
            id: Date.now().toString(),
            tasks: [],
            situation: "in progress",
            createdAt: new Date()
        };

        if (!newList) throw new Error("could not create list");

        return newList;
    },

    saveList: (list) => {
        lists.unshift(list);
        return;
    },

    deleteList: (id) => {
        lists = lists.filter(list => list.id !== id);
        return;
    },

    addTaskInList: (listId, task) => {
        if (!task) return;

        const currentList = lists.find(list => list.id === listId);
        currentList.tasks.push(task);

        return currentList;
    },

    finishList: (list) => {
        list.situation = "done";
        return list;
    }
};

module.exports = listModel;