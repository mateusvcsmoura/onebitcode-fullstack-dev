import { NextFunction, Request, Response, Router } from "express";
import { LeadsController } from "./controllers/leads-controller";
import { GroupsController } from "./controllers/groups-controller";
import { CampaignsController } from "./controllers/campaigns-controller";
import { CampaignLeadsController } from "./controllers/campaign-leads-controller";
import { GroupLeadsController } from "./controllers/group-leads-controller";

const router = Router();
const leadsController = new LeadsController();
const groupsController = new GroupsController();
const campaignsController = new CampaignsController();
const campaignLeadsController = new CampaignLeadsController();
const groupLeadsController = new GroupLeadsController();

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

router.get('/groups/:groupId/leads', groupLeadsController.getAllLeads);
router.post('/groups/:groupId/leads', groupLeadsController.addLead);
router.delete('/groups/:groupId/leads/:leadId', groupLeadsController.removeLead);

router.get('/campaigns', campaignsController.index);
router.post('/campaigns', campaignsController.create);
router.get('/campaigns/:id', campaignsController.show);
router.put('/campaigns/:id', campaignsController.update);
router.delete('/campaigns/:id', campaignsController.delete);

router.get('/campaigns/:campaignId/leads', campaignLeadsController.getLeads);
router.post('/campaigns/:campaignId/leads', campaignLeadsController.addLead);
router.put('/campaigns/:campaignId/leads/:leadId', campaignLeadsController.updateLeadStatus);
router.delete('/campaigns/:campaignId/leads/:leadId', campaignLeadsController.removeLead);

export { router };

