require('dotenv').config();

const users = require("../models/users");
const jwt = require("jsonwebtoken");

const authController = {
    register: (req, res) => {
        const { email, password, username } = req.body;

        if (typeof (email) !== "string" || typeof (password) !== "string" || typeof (username) !== "string") {
            return res.status(400).json({ message: "Invalid Credentials Format." });
        }

        const emailExistsInDatabase = users.find(user => user.email === email);
        if (emailExistsInDatabase) {
            return res.status(400).json({ message: "There is already an account linked to this e-mail." });
        }

        const newUser = { email, password, username, role: "standard" };
        users.push(newUser);

        return res.status(201).json(newUser);
    },

    login: (req, res) => {
        const { username, password } = req.body;
        const user = users.find(u => u.username === username);

        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid Credentials." });
        }

        const payload = { username };
        const secret = process.env.JWT_SECRET;

        const token = jwt.sign(payload, secret, {
            expiresIn: '1h',
            subject: 'user login'
        });

        return res.status(200).json({ token });
    }
};

module.exports = authController;