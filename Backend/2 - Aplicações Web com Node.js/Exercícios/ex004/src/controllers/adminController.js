const usersModel = require("../models/users");

const adminController = {
    // GET /dashboard
    dashboard: (req, res) => {
        const users = usersModel.getAllUsers();
        return res.status(200).json({ users });
    },

    // GET /dashboard/users/:username
    show: (req, res) => {
        const { username } = req.params;

        if (!username || typeof (username) !== "string") {
            return res.status(400).json({ message: "Invalid Username" });
        }

        const user = usersModel.getUserByUsername(username);

        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        return res.status(200).json(user);
    },

    // POST /make-admin
    makeAdmin: (req, res) => {
        const { username } = req.body;

        if (typeof (username) !== "string") {
            return res.status(400).json({ message: "Invalid Username" });
        }

        const user = usersModel.getUserByUsername(username);

        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        if (!usersModel.userIsAdmin(user)) {
            usersModel.makeAdmin(user);
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

        const hasDeleted = usersModel.deleteUser(username);

        if (!hasDeleted) {
            return res.status(400).json({ message: "Could Not Delete User" });
        }

        const users = usersModel.getAllUsers();

        return res.status(204).json(users);
    }
};

module.exports = adminController;