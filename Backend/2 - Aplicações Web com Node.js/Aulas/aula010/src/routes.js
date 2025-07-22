const express = require('express');

const dashboardController = require('./controllers/dashboardController');
const authController = require('./controllers/authController');
const authMiddleware = require('./middlewares/authMiddleware');

const router = express.Router();

router.get('/', authController.index);
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

router.get('/auth/logout', authMiddleware, authController.logout); // rota protegida com middleware
router.get('/dashboard', authMiddleware, dashboardController.dashboard); // rota protegida com middleware

module.exports = router;