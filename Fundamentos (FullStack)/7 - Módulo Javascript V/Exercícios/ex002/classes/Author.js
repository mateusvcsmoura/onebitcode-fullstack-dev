const Post = require("./Post");

class Author {
    constructor(username, name, email) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.posts = [];
    }

    createPost(subject, content) {
        const post = new Post(this, subject, content);

        this.posts.push(post);

        return post;
    }
};

module.exports = Author;

