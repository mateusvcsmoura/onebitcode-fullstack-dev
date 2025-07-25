import { ErrorRequestHandler } from "express";
import { HttpError } from "../errors/HttpError";

export const errorHandler: ErrorRequestHandler = (e, req, res, next) => {
    if (e instanceof HttpError) {
        return res.status(e.status).json({ message: e.message });
    } else if (e instanceof Error) {
        return res.status(500).json({ message: e.message });
    } else {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};