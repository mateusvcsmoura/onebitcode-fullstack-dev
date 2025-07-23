const express = require("express");
const homeController = require("../controllers/homeController");
const authMiddleware = require("../middlewares/auth-middleware");

const homeRouter = express.Router();

homeRouter.get('/home', authMiddleware, homeController.index);

module.exports = homeRouter;