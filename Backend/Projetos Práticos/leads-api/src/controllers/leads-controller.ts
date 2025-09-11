import { Handler } from "express";
import { createLeadRequestSchema, getLeadsRequestSchema, updateLeadRequestSchema } from "../schemas/leadsRequestSchema";
import { HttpError } from "../errors/HttpError";
import { LeadsService } from "../services/leads-services";

export class LeadsController {
    constructor(private readonly leadsService: LeadsService) { }

    index: Handler = async (req, res, next) => {
        try {
            const query = getLeadsRequestSchema.parse(req.query);
            const { page = "1", pageSize = "10", name, status, sortBy = "status", order = "asc" } = query;

            const result = await this.leadsService.getAllLeadsPaginated({
                name,
                status,
                page: Number(page),
                pageSize: Number(pageSize),
                sortBy,
                order
            });

            return res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }

    create: Handler = async (req, res, next) => {
        if (!req.body) throw new HttpError(400, "No req body");

        try {
            const body = createLeadRequestSchema.parse(req.body);
            const newLead = await this.leadsService.createLead(body);

            return res.status(201).json(newLead);
        } catch (e) {
            next(e);
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const lead = await this.leadsService.getLeadById(Number(req.params.id));

            return res.status(200).json(lead);
        } catch (e) {
            next(e);
        }
    }

    update: Handler = async (req, res, next) => {
        if (!req.body) throw new HttpError(400, "No req body");

        try {
            const body = updateLeadRequestSchema.parse(req.body);
            const updatedLead = await this.leadsService.updateLead(Number(req.params.id), body);

            return res.status(200).json(updatedLead);
        } catch (e) {
            next(e);
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const deletedLead = await this.leadsService.deleteLead(Number(req.params.id));

            return res.status(204).json({ deletedLead });
        } catch (e) {
            next(e);
        }
    }
};
