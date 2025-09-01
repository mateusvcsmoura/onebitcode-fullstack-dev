import { Handler } from "express";
import { prisma } from "../database";
import { createLeadRequestSchema, getLeadsRequestSchema, updateLeadRequestSchema } from "../schemas/leadsRequestSchema";
import { HttpError } from "../errors/HttpError";
import { Prisma } from "@prisma/client";

export class LeadsController {
    index: Handler = async (req, res, next) => {
        try {
            const query = getLeadsRequestSchema.parse(req.query);
            const { page = "1", pageSize = "10", name, status, sortBy = "status", order = "asc" } = query;

            const pageNumber = Number(page);
            const pageSizeNumber = Number(pageSize);

            const where: Prisma.LeadWhereInput = {};

            if (name) where.name = { contains: name, mode: "insensitive" };
            if (status) where.status = status;

            const leads = await prisma.lead.findMany({
                where,
                skip: (pageNumber - 1) * pageSizeNumber,
                take: pageSizeNumber,
                orderBy: { [sortBy]: order }
            });

            const total = await prisma.lead.count({ where });

            return res.status(200).json({ data: leads, meta: { page: pageNumber, pageSize: pageSizeNumber, total, totalPages: Math.ceil(total / pageSizeNumber) } });
        } catch (e) {
            next(e);
        }
    }

    create: Handler = async (req, res, next) => {
        if (!req.body) throw new HttpError(400, "No req body");

        try {
            const body = createLeadRequestSchema.parse(req.body);
            const newLead = await prisma.lead.create({ data: body });

            return res.status(201).json(newLead);
        } catch (e) {
            next(e);
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const lead = await prisma.lead.findUnique({
                where: { id: Number(req.params.id) },
                include: { campaigns: true, groups: true }
            });

            if (!lead) throw new HttpError(404, "Lead not found");

            return res.status(200).json(lead);
        } catch (e) {
            next(e);
        }
    }

    update: Handler = async (req, res, next) => {
        if (!req.body) throw new HttpError(400, "No req body");

        try {
            const lead = await prisma.lead.findUnique({ where: { id: Number(req.params.id) } });
            if (!lead) throw new HttpError(404, "Lead not found");

            const body = updateLeadRequestSchema.parse(req.body);
            const updatedLead = await prisma.lead.update({
                where: { id: Number(req.params.id) },
                data: body
            });

            return res.status(200).json(updatedLead);
        } catch (e) {
            next(e);
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const lead = await prisma.lead.findUnique({ where: { id: Number(req.params.id) } });
            if (!lead) throw new HttpError(404, "Lead not found");

            const deletedLead = await prisma.lead.delete({ where: { id: Number(req.params.id) } });

            return res.status(204).json(deletedLead);
        } catch (e) {
            next(e);
        }
    }
};
