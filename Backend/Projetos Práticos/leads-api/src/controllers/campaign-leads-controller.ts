import { Handler } from "express";
import { addLeadRequestSchema, getCampaignLeadsRequestSchema, updateLeadStatusRequestSchema } from "../schemas/campaignsRequestSchema";
import { LeadsRepository, LeadWhereParams } from "../repositories/leads-repository";
import { CampaignsRepository } from "../repositories/campaigns-repository";

export class CampaignLeadsController {
    constructor(
        private readonly leadsRepository: LeadsRepository,
        private readonly campaignsRepository: CampaignsRepository
    ) { }

    getLeads: Handler = async (req, res, next) => {
        try {
            const campaignId = Number(req.params.campaignId);
            const query = getCampaignLeadsRequestSchema.parse(req.query);

            const { page = "1", pageSize = "10", name, status, sortBy = "name", order = "asc" } = query;
            const limit = Number(pageSize);
            const offset = (Number(page) - 1) * limit;

            const where: LeadWhereParams = { campaignId, campaignStatus: status };

            if (name) where.name = { like: name, mode: "insensitive" };

            const leads = await this.leadsRepository.find({
                where,
                sortBy,
                order,
                limit,
                offset,
                include: { campaigns: true }
            });

            const total = await this.leadsRepository.count(where);

            return res.status(200).json({
                leads,
                meta: {
                    page: Number(page),
                    pageSize: limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            });

        } catch (e) {
            next(e);
        }
    }

    addLead: Handler = async (req, res, next) => {
        try {
            const { leadId, status = "New" } = addLeadRequestSchema.parse(req.body);

            await this.campaignsRepository.addLead({
                campaignId: Number(req.params.campaignId),
                leadId: leadId,
                status: status
            });

            return res.status(201).end();
        } catch (e) {
            next(e);
        }
    }

    updateLeadStatus: Handler = async (req, res, next) => {
        try {
            const { status } = updateLeadStatusRequestSchema.parse(req.body);
            const campaignId = Number(req.params.campaignId);
            const leadId = Number(req.params.leadId);

            await this.campaignsRepository.updateLeadStatus({ campaignId, leadId, status });

            return res.status(204).json({ message: "Lead Status was successfully updated" });
        } catch (e) {
            next(e);
        }
    }

    removeLead: Handler = async (req, res, next) => {
        try {
            const campaignId = Number(req.params.campaignId);
            const leadId = Number(req.params.leadId);

            await this.campaignsRepository.removeLead(campaignId, leadId);

            return res.status(200).json({ message: "Lead was successfully removed from Campaign" });
        } catch (e) {
            next(e);
        }
    }
};

