let posts = [
    { id: "1", title: 'test', content: 'text carai', createdAt: new Date(), updatedAt: new Date() },
    { id: "2", title: 'test2', content: 'text2 carai', createdAt: new Date(), updatedAt: new Date() }
];

// POST => ID, TITLE, CONTENT, CREATED AT, UPDATED AT

const postModel = {
    getAllPosts() {
        return posts;
    },

    getPostById(id) {
        return posts.find(post => post.id === id) || false;
    },

    createPost(title, content) {
        const post = {
            id: Date.now().toString(),
            title,
            content,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        if (!post) return;

        return post;
    },

    savePost(post) {
        posts.unshift(post);
        return;
    },

    updatePost(id, updatedPost) {
        const index = posts.findIndex(post => post.id === id);
        posts[index] = { ...posts[index], ...updatedPost, updatedAt: new Date() }; // Rewrite the old post with the new post
    },

    deletePost(id) {
        posts = posts.filter(post => post.id !== id);
    }
};

module.exports = postModel;
