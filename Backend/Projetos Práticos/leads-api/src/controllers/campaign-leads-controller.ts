import { Handler } from "express";
import { Prisma } from "@prisma/client";
import { addLeadRequestSchema, getCampaignLeadsRequestSchema, updateLeadStatusRequestSchema } from "../schemas/campaignsRequestSchema";
import { prisma } from "../database";

export class CampaignLeadsController {
    getLeads: Handler = async (req, res, next) => {
        try {
            const campaignId = Number(req.params.campaignId);
            const query = getCampaignLeadsRequestSchema.parse(req.query);

            const { page = "1", pageSize = "10", name, status, sortBy = "name", order = "asc" } = query;
            const pageNumber = Number(page);
            const pageSizeNumber = Number(pageSize);

            const where: Prisma.LeadWhereInput = {
                campaigns: {
                    some: { campaignId } // alguma dessas campanhas tem que ser igual ao campaignId
                }
            };

            if (name) where.name = { contains: name, mode: "insensitive" };
            if (status) where.campaigns = { some: { status } };

            const leads = await prisma.lead.findMany({
                where,
                orderBy: { [sortBy]: order },
                skip: (pageNumber - 1) * pageSizeNumber,
                take: pageSizeNumber,
                include: { campaigns: { select: { campaignId: true, leadId: true, status: true } } }
            });

            const total = await prisma.lead.count({ where });

            return res.status(200).json({
                leads,
                meta: {
                    page: pageNumber,
                    pageSize: pageSizeNumber,
                    total,
                    totalPages: Math.ceil(total / pageSizeNumber)
                }
            });

        } catch (e) {
            next(e);
        }
    }

    addLead: Handler = async (req, res, next) => {
        try {
            const body = addLeadRequestSchema.parse(req.body);
            await prisma.leadCampaign.create({ // tabela intermediaria lead - campaign
                data: {
                    campaignId: Number(req.params.campaignId),
                    leadId: body.leadId,
                    status: body.status
                }
            });

            return res.status(201).end();
        } catch (e) {
            next(e);
        }
    }

    updateLeadStatus: Handler = async (req, res, next) => {
        try {
            const body = updateLeadStatusRequestSchema.parse(req.body);
            const updatedLeadCampaign = await prisma.leadCampaign.update({
                data: body,
                where: {
                    leadId_campaignId: { // pk composta
                        campaignId: Number(req.params.campaignId),
                        leadId: Number(req.params.leadId)
                    }
                }
            });

            return res.status(200).json(updatedLeadCampaign);
        } catch (e) {
            next(e);
        }
    }

    removeLead: Handler = async (req, res, next) => {
        try {
            const removedLead = await prisma.leadCampaign.delete({
                where: {
                    leadId_campaignId: {
                        campaignId: Number(req.params.campaignId),
                        leadId: Number(req.params.leadId)
                    }
                }
            });

            return res.status(200).json({ removedLead });
        } catch (e) {
            next(e);
        }
    }
};

