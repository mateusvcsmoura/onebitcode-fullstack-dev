const listModel = require("../models/listModel");

const listController = {
    // GET /lists
    lists: (req, res) => {
        const lists = listModel.getAllLists();
        return res.render('lists', { lists });
    },

    // GET /new-list
    create: (req, res) => {
        return res.render('new-list');
    },

    // POST /new-list
    save: (req, res) => {
        const { name, description } = req.body;
        const newList = listModel.createList(name, description);
        listModel.saveList(newList);

        return res.redirect('/lists');
    },

    // GET /list/:id
    show: (req, res) => {
        const listId = req.params.id;
        const list = listModel.getListById(listId);

        return res.render('list', { list });
    },

    // POST /list/delete/:id
    delete: (req, res) => {
        const id = req.params.id;
        listModel.deleteList(id);

        return res.redirect('/lists');
    }
};

module.exports = listController;