let users = [
    { email: "admin@admin.js", password: "admin", username: "admin", role: "admin" }
];

const usersModel = {
    getAllUsers: function () {
        return users;
    },

    getUserByUsername: function (username) {
        const user = users.find(u => u.username === username);
        return user || false;
    },

    getUserByEmail: function (userEmail) {
        const user = users.find(u => u.email === userEmail);
        return user || false;
    },

    createUser: function (email, password, username) {
        const newUser = {
            email,
            password,
            username,
            role: "standard"
        };

        return newUser;
    },

    saveUser: function (user) {
        users.push(user);
        return users;
    },

    userIsAdmin: function (user) {
        return user.role === "admin";
    },

    makeAdmin: function (user) {
        user.role = "admin";
    },

    deleteUser: function (username) {
        const userIndex = users.findIndex(u => u.username === username);
        const user = this.getUserByUsername(username);

        if (userIndex === -1 || user.role === "admin") return;

        users.splice(userIndex, 1);

        return users;
    }
}

module.exports = usersModel;