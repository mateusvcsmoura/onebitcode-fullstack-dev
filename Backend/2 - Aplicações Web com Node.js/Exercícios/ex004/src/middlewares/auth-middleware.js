require('dotenv').config();

const jwt = require("jsonwebtoken");
const users = require('../models/users');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        next();
    }

    const token = authHeader.split(" ")[1];

    try {
        const secret = process.env.JWT_SECRET;
        const decodedToken = jwt.verify(token, secret);

        const user = users.find(u => u.username === decodedToken.username);

        if (!user) {
            return res.status(401).json({ message: "Invalid User" });
        }

        req.user = user;

        next();
    } catch (e) {
        return res.status(401).json({ message: "Invalid Token" });
    }
}

module.exports = authMiddleware;
