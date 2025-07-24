require("dotenv").config();

const usersModel = require("../models/users-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const HttpError = require("../errors/HttpError");

const authController = {
    // POST /auth/register
    register: (req, res) => {
        if (!req.body) {
            throw new HttpError(400, "No Body Req. Fill all the fields and request again.");
        }

        const { username, email, password } = req.body;
        if (typeof (username) !== "string" || typeof (email) !== "string" || typeof (password) !== "string") {
            throw new HttpError(400, "Invalid Credentials Format")
        }

        const userExists = usersModel.getUserByEmail(email);
        if (userExists) {
            throw new HttpError(409, "There is already an account linked to this e-mail");
        }

        const newUser = usersModel.createUser(username, email, password);

        return res.status(201).json({ ...newUser, password: undefined });
    },

    // POST /auth/login
    login: (req, res) => {
        if (!req.body) {
            throw new HttpError(400, "No Body Req. Fill all the fields and request again.");
        }

        const { email, password } = req.body;
        if (typeof (email) !== "string" || typeof (password) !== "string") {
            throw new HttpError(400, "Invalid Credentials Format");
        }

        const user = usersModel.getUserByEmail(email);

        if (!user) throw new HttpError(404, "User Not Found");
        if (!bcrypt.compareSync(password, user.password)) throw new HttpError(401, "Incorrect Credentials");

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