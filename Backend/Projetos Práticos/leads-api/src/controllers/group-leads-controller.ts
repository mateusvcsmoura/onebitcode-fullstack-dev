import { Handler } from "express";
import { prisma } from "../database";
import { HttpError } from "../errors/HttpError";
import { addLeadRequestSchema } from "../schemas/groupsRequestSchema";
import { Prisma } from "@prisma/client";
import { getLeadsRequestSchema } from "../schemas/leadsRequestSchema";

export class GroupLeadsController {
    getAllLeads: Handler = async (req, res, next) => {
        try {
            const groupId = Number(req.params.groupId);
            const query = getLeadsRequestSchema.parse(req.query);

            const { page = "1", pageSize = "10", name, status, sortBy = "name", order = "asc" } = query;
            const pageNumber = Number(page);
            const pageSizeNumber = Number(pageSize);

            const where: Prisma.LeadWhereInput = {
                groups: {
                    some: { id: groupId }
                }
            };

            if (name) where.name = { contains: name, mode: "insensitive" };
            if (status) where.status = status;

            const leads = await prisma.lead.findMany({
                where,
                orderBy: { [sortBy]: order },
                skip: (pageNumber - 1) * pageSizeNumber,
                take: pageSizeNumber,
                include: { groups: true }
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
            const groupId = Number(req.params.groupId);
            const lead = addLeadRequestSchema.parse(req.body);

            const groupExists = await prisma.group.findUnique({ where: { id: groupId } });
            if (!groupExists) throw new HttpError(404, "Group not found");

            const leadExists = await prisma.lead.findUnique({ where: { id: lead.leadId } });
            if (!leadExists) throw new HttpError(404, "Lead not found");

            const updatedGroup = await prisma.group.update({
                where: { id: groupId },
                data: {
                    leads: { connect: { id: lead.leadId } }
                },
                include: { leads: true }
            });

            return res.status(201).json(updatedGroup);
        } catch (e) {
            next(e);
        }
    }

    removeLead: Handler = async (req, res, next) => {
        try {
            const groupId = Number(req.params.groupId);
            const leadId = Number(req.params.leadId);

            const groupExists = await prisma.group.findUnique({ where: { id: groupId } });
            if (!groupExists) throw new HttpError(404, "Group not found");

            const leadExists = await prisma.lead.findUnique({ where: { id: leadId } });
            if (!leadExists) throw new HttpError(404, "Lead not found");

            const updatedGroup = await prisma.group.update({
                where: { id: groupId },
                data: {
                    leads: {
                        disconnect: { id: leadId }
                    }
                },
                include: { leads: true }
            });

            return res.status(200).json(updatedGroup);
        } catch (e) {
            next(e);
        }
    }
};

