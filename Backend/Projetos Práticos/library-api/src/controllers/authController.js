require("dotenv").config();

const usersModel = require("../models/users-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const authController = {
    // POST /auth/register
    register: (req, res) => {
        if (!req.body) {
            return res.status(400).json({ message: "No Body Req. Fill all the fields and request again." });
        }

        const { username, email, password } = req.body;
        if (typeof (username) !== "string" || typeof (email) !== "string" || typeof (password) !== "string") {
            return res.status(400).json({ message: "Invalid Credentials Format" });
        }

        const userExists = usersModel.getUserByEmail(email);
        if (userExists) {
            return res.status(409).json({ message: "There is already an account linked to this e-mail" });
        }

        const newUser = usersModel.createUser(username, email, password);

        return res.status(201).json({ ...newUser, password: undefined });
    },

    // POST /auth/login
    login: (req, res) => {
        if (!req.body) {
            return res.status(400).json({ message: "No Body Req. Fill all the fields and request again." });
        }

        const { email, password } = req.body;
        if (typeof (email) !== "string" || typeof (password) !== "string") {
            return res.status(400).json({ message: "Invalid Credentials Format" });
        }

        const user = usersModel.getUserByEmail(email);

        if (!user) return res.status(404).json({ message: "User Not Found" });
        if (!bcrypt.compareSync(password, user.password)) return res.status(401).json({ message: "Incorrect Credentials" });

        const secret = process.env.JWT_SECRET;
        const payload = { id: user.id, email: user.email };

        const token = jwt.sign(payload, secret, {
            expiresIn: '1d',
            subject: 'user login'
        });

        return res.status(200).json({ token });
    }
};

module.exports = authController;