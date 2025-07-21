module.exports = function middlewareC(req, res, next) {
    console.log("running middleware c");
    req.middlewareC = "Ok";
    next();
};