const users = require('../models/users');

const authController = {
    // GET /
    index: (req, res) => {
        res.render('index');
    },

    // POST /auth/register
    register: (req, res) => {
        const { username, password } = req.body;
        const user = users.find(user => user.username === username);

        if (user) {
            return res.status(400).redirect('/');
        }

        const newUser = { username, password, role: "standard" };
        users.push(newUser);

        req.session.authenticated = true; // session obj vai estar disponivel em outras requisições a partir desse momento
        req.session.currentUser = newUser;

        res.redirect('/dashboard');
    },

    // POST /auth/login
    login: (req, res) => {
        const { username, password } = req.body;
        const user = users.find(user => user.username === username);

        if (!user) {
            return res.redirect('/');
        }

        if (password !== user.password) {
            return res.redirect('/');
        }

        req.session.authenticated = true; // session obj vai estar disponivel em outras requisições a partir desse momento
        req.session.currentUser = user;

        return res.redirect('/dashboard');
    },

    // GET /auth/logout
    logout: (req, res) => {
        req.session.destroy(); // destroi o objeto da sessão
        return res.redirect('/');
    }
};

module.exports = authController;