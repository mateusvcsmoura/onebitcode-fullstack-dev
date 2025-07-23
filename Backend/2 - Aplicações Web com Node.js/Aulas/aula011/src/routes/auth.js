const express = require("express");
const users = require("../models/users");
const jwt = require('jsonwebtoken');

const authRouter = express.Router();

const secretKey = "secret-key-word"; // nanoid?

authRouter.post('/register', (req, res) => {
    const { username, password } = req.body;
    const user = { username, password };

    if (user) {
        users.push(user);
        res.status(201).json(user);
    }
});

authRouter.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid Credentials" });
    }

    const payload = { username };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h', subject: "user login/register" });

    return res.json({ token });
});

module.exports = authRouter;