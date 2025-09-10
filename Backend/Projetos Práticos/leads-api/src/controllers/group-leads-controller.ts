import { Handler } from "express";
import { HttpError } from "../errors/HttpError";
import { addLeadRequestSchema } from "../schemas/groupsRequestSchema";
import { getLeadsRequestSchema } from "../schemas/leadsRequestSchema";
import { GroupsRepository } from "../repositories/groups-repository";
import { LeadsRepository, LeadWhereParams } from "../repositories/leads-repository";

export class GroupLeadsController {
    constructor(private readonly groupsRepository: GroupsRepository, private readonly leadsRepository: LeadsRepository) { }

    getAllLeads: Handler = async (req, res, next) => {
        try {
            const groupId = Number(req.params.groupId);
            const query = getLeadsRequestSchema.parse(req.query);

            const { page = "1", pageSize = "10", name, status, sortBy = "name", order = "asc" } = query;
            const limit = Number(pageSize);
            const offset = (Number(page) - 1) * limit;

            const where: LeadWhereParams = { groupId };

            if (name) where.name = { like: name, mode: "insensitive" };
            if (status) where.status = status;

            const leads = await this.leadsRepository.find({
                where,
                sortBy,
                order,
                limit,
                offset,
                include: { groups: true }
            });

            // const leads = await prisma.lead.findMany({
            //     where,
            //     orderBy: { [sortBy]: order },
            //     skip: (pageNumber - 1) * pageSizeNumber,
            //     take: pageSizeNumber,
            //     include: { groups: true }
            // });

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
            const groupId = Number(req.params.groupId);
            const lead = addLeadRequestSchema.parse(req.body);

            const groupExists = await this.groupsRepository.findById(groupId);
            if (!groupExists) throw new HttpError(404, "Group not found");

            const leadExists = await this.leadsRepository.findById(lead.leadId);
            if (!leadExists) throw new HttpError(404, "Lead not found");

            const updatedGroup = await this.groupsRepository.addLead(groupId, lead.leadId);

            return res.status(201).json(updatedGroup);
        } catch (e) {
            next(e);
        }
    }

    removeLead: Handler = async (req, res, next) => {
        try {
            const groupId = Number(req.params.groupId);
            const leadId = Number(req.params.leadId);

            const groupExists = await this.groupsRepository.findById(groupId);
            if (!groupExists) throw new HttpError(404, "Group not found");

            const leadExists = await this.leadsRepository.findById(leadId);
            if (!leadExists) throw new HttpError(404, "Lead not found");

            const updatedGroup = await this.groupsRepository.removeLead(groupId, leadId);

            return res.status(200).json(updatedGroup);
        } catch (e) {
            next(e);
        }
    }
};

