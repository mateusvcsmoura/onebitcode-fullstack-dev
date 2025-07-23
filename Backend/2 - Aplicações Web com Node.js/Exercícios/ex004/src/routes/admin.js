const express = require("express");
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

const adminRouter = express.Router();

adminRouter.get('/dashboard', authMiddleware, adminMiddleware, adminController.dashboard);
adminRouter.post('/make-admin', authMiddleware, adminMiddleware, adminController.makeAdmin);
adminRouter.delete('/delete-user', authMiddleware, adminMiddleware, adminController.deleteUser);

module.exports = adminRouter;