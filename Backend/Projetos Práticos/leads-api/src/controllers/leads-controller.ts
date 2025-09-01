import { Handler } from "express";
import { prisma } from "../database";
import { createLeadRequestSchema, updateLeadRequestSchema } from "../schemas/leadsRequestSchema";
import { HttpError } from "../errors/HttpError";

export class LeadsController {
    index: Handler = async (req, res, next) => {
        try {
            const leads = await prisma.lead.findMany();

            return res.status(200).json(leads);
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
