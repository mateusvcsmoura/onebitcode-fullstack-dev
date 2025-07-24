const express = require("express");
const authController = require("./controllers/authController");
const { ensureAuth } = require("./middlewares/auth-middleware");

const router = express.Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

router.get('/test', ensureAuth, (req, res) => res.json({ message: "Ok" }));

module.exports = router;