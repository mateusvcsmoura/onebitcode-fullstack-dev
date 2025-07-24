const uuid = require('uuid').v4;
const bcrypt = require("bcrypt");

let users = [
    { id: "1", name: "admin", email: "admin@admin.js", password: "admin" },
    { id: "2", name: "mateus", email: "mateus@gmail.com", password: "9999" }
];

const usersModel = {
    getAllUsers: function () {
        return users;
    },

    getUserById: function (id) {
        const user = users.find(u => u.id === id);

        return user || null;
    },

    getUserByEmail: function (email) {
        const user = users.find(u => u.email === email);

        return user || null;
    },

    createUser: function (username, email, password) {
        const newUser = {
            name: username,
            email,
            password: bcrypt.hashSync(password, 10),
            id: uuid()
        };

        users.push(newUser);

        return newUser;
    }
};

module.exports = usersModel;
