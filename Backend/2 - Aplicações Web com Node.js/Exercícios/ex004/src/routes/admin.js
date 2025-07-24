const express = require("express");
const adminController = require("../controllers/adminController");
const { ensureAuthMiddleware } = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

const adminRouter = express.Router();

adminRouter.get('/dashboard', ensureAuthMiddleware, adminMiddleware, adminController.dashboard);
adminRouter.get('/dashboard/users/:username', ensureAuthMiddleware, adminMiddleware, adminController.show);
adminRouter.post('/make-admin', ensureAuthMiddleware, adminMiddleware, adminController.makeAdmin);
adminRouter.delete('/delete-user', ensureAuthMiddleware, adminMiddleware, adminController.deleteUser);

module.exports = adminRouter;