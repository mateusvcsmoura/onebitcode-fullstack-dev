let users = require("../models/users");

const adminController = {
    // GET /dashboard
    dashboard: (req, res) => {
        return res.status(200).json({ users });
    },

    // POST /make-admin
    makeAdmin: (req, res) => {
        const { username } = req.body;

        if (typeof (username) !== "string") {
            return res.status(400).json({ message: "Invalid Username" });
        }

        const user = users.find(u => u.username === username);

        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        if (user.role !== "admin") {
            user.role = "admin";
        } else {
            return res.status(409).json({ message: "User is already an Administrator" });
        }

        return res.status(200).json(user);
    },

    // DELETE /delete-user
    deleteUser: (req, res) => {
        const { username } = req.body;

        if (!username || typeof (username) !== "string") {
            return res.status(400).json({ message: "Invalid Username" });
        }

        const userIndex = users.findIndex(user => user.username === username);

        if (userIndex === -1) {
            return res.status(404).json({ message: "User Not Found" });
        }

        users.splice(userIndex, 1);

        return res.status(204).json(users);
    }
};

module.exports = adminController;