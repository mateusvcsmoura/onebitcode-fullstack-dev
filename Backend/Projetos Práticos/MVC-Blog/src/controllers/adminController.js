const postModel = require("../models/postModel");

const adminController = {
    // GET /admin
    index: (req, res) => {
        const posts = postModel.getAllPosts();
        return res.render('admin', { posts });
    },

    // GET /admin/create
    create: (req, res) => {
        return res.render('newPostForm');
    },

    // POST /admin/create
    save: (req, res) => {
        const { title, content } = req.body;
        const newPost = postModel.createPost(title, content);
        postModel.savePost(newPost);

        return res.redirect('/admin');
    },

    // GET /admin/edit/:id
    edit: (req, res) => {
        const id = req.params.id;
        const post = postModel.getPostById(id);

        return res.render('editPostForm', { post });
    },

    // POST /admin/update/:id
    update: (req, res) => {
        const id = req.params.id;
        const { title, content } = req.body;

        postModel.updatePost(id, { title, content });

        return res.redirect('/admin');
    },

    // POST /admin/delete/:id
    delete: (req, res) => {
        const id = req.params.id;
        postModel.deletePost(id);

        return res.redirect('/admin');
    }
};

module.exports = adminController;