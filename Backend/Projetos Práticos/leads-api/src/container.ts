import { LeadsController } from "./controllers/leads-controller";
import { GroupsController } from "./controllers/groups-controller";
import { CampaignsController } from "./controllers/campaigns-controller";
import { CampaignLeadsController } from "./controllers/campaign-leads-controller";
import { GroupLeadsController } from "./controllers/group-leads-controller";
import { PrismaLeadsRepository } from "./repositories/prisma/PrismaLeadsRepository";
import { PrismaGroupsRepository } from "./repositories/prisma/PrismaGroupsRepository";

export const leadsRepository = new PrismaLeadsRepository();
export const groupsRepository = new PrismaGroupsRepository();

export const leadsController = new LeadsController(leadsRepository);
export const groupsController = new GroupsController(groupsRepository);
export const groupLeadsController = new GroupLeadsController(groupsRepository, leadsRepository);
export const campaignsController = new CampaignsController();
export const campaignLeadsController = new CampaignLeadsController();
