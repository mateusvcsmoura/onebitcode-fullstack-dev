import { NextFunction, Request, Response, Router } from "express";
import { LeadsController } from "./controllers/leads-controller";
import { GroupsController } from "./controllers/groups-controller";
import { CampaignsController } from "./controllers/campaigns-controller";

const router = Router();
const leadsController = new LeadsController();
const groupsController = new GroupsController();
const campaignsController = new CampaignsController();

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

router.get('/groups', groupsController.index);
router.post('/groups', groupsController.create);
router.get('/groups/:id', groupsController.show);
router.put('/groups/:id', groupsController.update);
router.delete('/groups/:id', groupsController.delete);

router.get('/campaigns', campaignsController.index);
router.post('/campaigns', campaignsController.create);
router.get('/campaigns/:id', campaignsController.show);
router.put('/campaigns/:id', campaignsController.update);
router.delete('/campaigns/:id', campaignsController.delete);

export { router };

