function authMiddleware(req, res, next) {
    if (req.session.authenticated) {
        next();
    } else {
        console.log("unauthenticated access blocked");
        return res.redirect('/');
    }
};

const ensureUserIsAdmin = (req, res, next) => {
    if (req.session.currentUser.role !== "admin") {
        console.log("unauthorized access blocked");
        return res.redirect('/dashboard');
    } else {
        next();
    }
};

module.exports = { authMiddleware, ensureUserIsAdmin };
