class Comment {
    constructor(author, content) {
        this.author = author.username;
        this.content = content;
        this.createdAt = new Date();
    }
}

module.exports = Comment;