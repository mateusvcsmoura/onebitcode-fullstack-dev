require("dotenv").config();

const jwt = require("jsonwebtoken");
const usersModel = require("../models/users-model");

module.exports = {
    ensureAuth: (req, res, next) => {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: "Authorization Required" });
        }

        const token = authHeader.split(" ")[1];

        try {
            const secret = process.env.JWT_SECRET;
            const { id } = jwt.verify(token, secret);
            const user = usersModel.getUserById(id);

            if (!user) return res.status(404).json({ message: "User Not Found" });

            req.user = user;

            next();
        } catch (e) {
            return res.status(401).json({ message: "Invalid Token" });
        }
    }
}