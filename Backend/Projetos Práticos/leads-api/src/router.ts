import { NextFunction, Request, Response, Router } from "express";
import { LeadsController } from "./controllers/leads-controller";

const router = Router();
const leadsController = new LeadsController();

router.get('/status', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({ message: "API is currently online!" });
    } catch (e) {
        next(e);
    }
});

router.get('/leads', leadsController.index);
router.post('/leads', leadsController.create);
router.get('/leads/:id', leadsController.show);
router.put('/leads/:id', leadsController.update);
router.delete('/leads/:id', leadsController.delete);

export { router };

