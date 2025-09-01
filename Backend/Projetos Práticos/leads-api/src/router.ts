import { NextFunction, Request, Response, Router } from "express";
import { HttpError } from "./errors/HttpError";

const router = Router();

router.get('/test', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({ message: "Hello, World!" });
    } catch (e) {
        next(e);
    }
});

export { router };

