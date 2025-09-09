import { Handler } from "express";
import { createLeadRequestSchema, getLeadsRequestSchema, updateLeadRequestSchema } from "../schemas/leadsRequestSchema";
import { HttpError } from "../errors/HttpError";
import { LeadsRepository, LeadWhereParams } from "../repositories/leads-repository";

export class LeadsController {
    private leadsRepository: LeadsRepository;

    constructor(leadsRepository: LeadsRepository) {
        this.leadsRepository = leadsRepository;
    }

    index: Handler = async (req, res, next) => {
        try {
            const query = getLeadsRequestSchema.parse(req.query);
            const { page = "1", pageSize = "10", name, status, sortBy = "status", order = "asc" } = query;

            const limit = Number(pageSize);
            const offset = (Number(page) - 1) * limit;

            const where: LeadWhereParams = {};

            if (name) where.name = { like: name, mode: "insensitive" };
            if (status) where.status = status;

            const leads = await this.leadsRepository.find({ where, sortBy, order, limit, offset });
            const total = await this.leadsRepository.count(where);

            // const leads = await prisma.lead.findMany({
            //     where,
            //     skip: (pageNumber - 1) * pageSizeNumber,
            //     take: pageSizeNumber,
            //     orderBy: { [sortBy]: order }
            // });

            // const total = await prisma.lead.count({ where });

            return res.status(200).json({
                data: leads,
                meta: { page: Number(page), pageSize: limit, total, totalPages: Math.ceil(total / limit) }
            });
        } catch (e) {
            next(e);
        }
    }

    create: Handler = async (req, res, next) => {
        if (!req.body) throw new HttpError(400, "No req body");

        try {
            const body = createLeadRequestSchema.parse(req.body);
            // const newLead = await prisma.lead.create({ data: body });
            const newLead = await this.leadsRepository.create(body);

            return res.status(201).json(newLead);
        } catch (e) {
            next(e);
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            // const lead = await prisma.lead.findUnique({
            //     where: { id: Number(req.params.id) },
            //     include: { campaigns: true, groups: true }
            // });

            const lead = await this.leadsRepository.findById(Number(req.params.id));
            if (!lead) throw new HttpError(404, "Lead not found");

            return res.status(200).json(lead);
        } catch (e) {
            next(e);
        }
    }

    update: Handler = async (req, res, next) => {
        if (!req.body) throw new HttpError(400, "No req body");

        try {
            // const lead = await prisma.lead.findUnique({ where: { id: Number(req.params.id) } });
            const lead = await this.leadsRepository.findById(Number(req.params.id));
            if (!lead) throw new HttpError(404, "Lead not found");

            const body = updateLeadRequestSchema.parse(req.body);

            if (lead.status === "New" && body.status !== undefined && body.status !== "Contacted") {
                throw new HttpError(400, "A New Lead must be Contacted before updating his status to any other value.");
            }

            if (body.status && body.status === "Archived") {
                const now = new Date();

                const diffTime = Math.abs(now.getTime() - lead.updatedAt.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                if (diffDays < 180) {
                    throw new HttpError(400, "A Lead can only be Archived after 6 inactive months.");
                }
            }

            // const updatedLead = await prisma.lead.update({
            //     where: { id: Number(req.params.id) },
            //     data: body
            // });

            const updatedLead = await this.leadsRepository.updateById(Number(req.params.id), body);

            return res.status(200).json(updatedLead);
        } catch (e) {
            next(e);
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            // const lead = await prisma.lead.findUnique({ where: { id: Number(req.params.id) } });
            const lead = await this.leadsRepository.findById(Number(req.params.id));
            if (!lead) throw new HttpError(404, "Lead not found");

            // const deletedLead = await prisma.lead.delete({ where: { id: Number(req.params.id) } });
            const deletedLead = await this.leadsRepository.deleteById(Number(req.params.id));

            return res.status(204).json(deletedLead);
        } catch (e) {
            next(e);
        }
    }
};
