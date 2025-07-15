let lists = [
    { id: "1", name: "Task List 1", description: "Description 1", tasks: [{ name: "task1", situation: "in progress" }, { name: "task2", situation: "done" }], situation: "in progress", createdAt: new Date() },
    { id: "2", name: "Task List 2", description: "Description 2", tasks: [{ name: "task1", situation: "in progress" }, { name: "task2", situation: "done" }], situation: "in progress", createdAt: new Date() }
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
    }
};

module.exports = listModel;