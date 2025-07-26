"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const HttpError_1 = require("../errors/HttpError");
const errorHandler = (e, req, res, next) => {
    if (e instanceof HttpError_1.HttpError) {
        return res.status(e.status).json({ message: e.message });
    }
    else if (e instanceof Error) {
        return res.status(500).json({ message: e.message });
    }
    else {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.errorHandler = errorHandler;
