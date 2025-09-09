import { LeadsController } from "./controllers/leads-controller";
import { GroupsController } from "./controllers/groups-controller";
import { CampaignsController } from "./controllers/campaigns-controller";
import { CampaignLeadsController } from "./controllers/campaign-leads-controller";
import { GroupLeadsController } from "./controllers/group-leads-controller";
import { PrismaLeadsRepository } from "./repositories/prisma/PrismaLeadsRepository";

export const leadsRepository = new PrismaLeadsRepository();

export const leadsController = new LeadsController(leadsRepository);
export const groupsController = new GroupsController();
export const campaignsController = new CampaignsController();
export const campaignLeadsController = new CampaignLeadsController();
export const groupLeadsController = new GroupLeadsController();
