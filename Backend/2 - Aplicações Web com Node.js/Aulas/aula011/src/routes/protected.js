const express = require("express");
const authMiddleware = require("../middlewares/middleware-auth");

const protectedRouter = express.Router();

protectedRouter.get('/dashboard', authMiddleware, (req, res) => {
    const username = req.authenticatedUser.username;
    res.json({ message: `Welcome, ${username}. You are currently at a Protected Area.` });
});

module.exports = protectedRouter;