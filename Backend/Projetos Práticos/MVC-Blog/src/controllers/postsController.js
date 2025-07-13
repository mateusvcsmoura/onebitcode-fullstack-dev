const postModel = require("../models/postModel");

const postsController = {
    // GET /
    index: (req, res) => {
        const posts = postModel.getAllPosts();
        return res.render('index', { posts });
    },

    // GET /posts/:id
    show: (req, res) => {
        const id = req.params.id;
        const post = postModel.getPostById(id);

        return res.render('post', { post });
    }
};

module.exports = postsController;