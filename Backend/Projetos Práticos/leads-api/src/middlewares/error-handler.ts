import { ErrorRequestHandler } from "express";
import { HttpError } from "../errors/HttpError";

const errorHandlerMiddleware: ErrorRequestHandler = (e, req, res, next) => {
    if (e instanceof HttpError) {
        res.status(e.status).json({ message: e.message });
    } else if (e instanceof Error) {
        res.status(500).json({ message: e.message });
    } else {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { errorHandlerMiddleware };