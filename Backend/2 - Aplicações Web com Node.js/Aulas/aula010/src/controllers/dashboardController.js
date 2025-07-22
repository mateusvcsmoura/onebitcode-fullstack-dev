const users = require('../models/users');

const dashboardController = {
    dashboard: (req, res) => {
        console.log(req.session.authenticated, req.session.currentUser);

        res.render('dashboard', { user: req.session.currentUser });
    },

    users: (req, res) => {
        res.render('users', { users });
    }
};

module.exports = dashboardController;