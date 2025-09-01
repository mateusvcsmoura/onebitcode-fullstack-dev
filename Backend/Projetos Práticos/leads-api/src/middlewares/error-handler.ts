import { ErrorRequestHandler } from "express";
import { HttpError } from "../errors/HttpError";
import z from "zod";

const errorHandlerMiddleware: ErrorRequestHandler = (e, req, res, next) => {
    if (e instanceof HttpError) {
        res.status(e.status).json({ message: e.message });
    } else if (e instanceof z.ZodError) {
        res.status(400).json({ message: e.issues[0].message });
    } else if (e instanceof Error) {
        res.status(500).json({ message: e.message });
    } else {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { errorHandlerMiddleware };