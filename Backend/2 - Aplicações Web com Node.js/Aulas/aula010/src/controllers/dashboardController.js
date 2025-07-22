const dashboardController = {
    dashboard: (req, res) => {
        console.log(req.session.authenticated, req.session.currentUser);

        res.render('dashboard', { user: req.session.currentUser });
    }
};

module.exports = dashboardController;