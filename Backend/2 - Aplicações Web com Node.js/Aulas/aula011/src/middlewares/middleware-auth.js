const jwt = require("jsonwebtoken");
const users = require("../models/users");
const secretKey = "secret-key-word"; // nanoid?

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "authorization required" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decodedToken = jwt.verify(token, secretKey);
        console.log(decodedToken);

        const user = users.find(u => u.username === decodedToken.username);

        if (!user) {
            return res.status(401).json({ message: "invalid user" });
        }

        req.authenticatedUser = user;

        next();
    } catch (e) {
        return res.status(401).json({ message: "invalid token" });
    }
};

module.exports = authMiddleware;