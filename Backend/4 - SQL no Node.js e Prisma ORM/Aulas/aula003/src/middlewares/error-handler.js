const HttpError = require("../errors/HttpError");

const errorHandler = (e, req, res, next) => {
    if (e instanceof HttpError) {
        return res.status(e.status).json({ message: e.message });
    } else if (e instanceof Error) {
        return res.status(500).json({ message: e.message });
    } else {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = errorHandler;