const adminMiddleware = (req, res, next) => {
    if (!req.user?.role || req.user.role !== "admin") {
        return res.status(401).json({ message: "Unauthorized User" });
    } else {
        next();
    }
};

module.exports = adminMiddleware;
