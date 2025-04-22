const idCounter = require("../modules/idCounter");
const Comment = require("./Comment");

class Post {
    constructor(author, subject, content) {
        this.author = { username: author.username, name: author.name, email: author.email };
        this.subject = subject;
        this.content = content;
        this.id = idCounter();
        this.comments = [];
        this.createdAt = new Date();
    }

    addComment(author, content) {
        const comment = new Comment(author, content);

        this.comments.push(comment);

        return comment;
    }
}

module.exports = Post;
