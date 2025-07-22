function authMiddleware(req, res, next) {
    if (req.session.authenticated) {
        next();
    } else {
        console.log("unauthenticated access blocked");
        return res.redirect('/');
    }
};

module.exports = authMiddleware;
