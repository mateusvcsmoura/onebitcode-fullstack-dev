const HttpError = require("../errors/HttpError");

module.exports = (e, req, res, next) => {
    if (e) {
        if (e instanceof HttpError) {
            return res.status(e.status).json({ message: e.message })
        } else {
            return res.status(400).json({ message: e.message });
        }
    } else {
        next();
    }
}