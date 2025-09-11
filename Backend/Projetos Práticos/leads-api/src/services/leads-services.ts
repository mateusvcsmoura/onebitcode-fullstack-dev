import { HttpError } from '../errors/HttpError';
import { CreateLeadAttributes, LeadsRepository, LeadStatus, LeadWhereParams } from '../repositories/leads-repository';

interface GetLeadsWithPaginationParams {
    page?: number;
    pageSize?: number;
    name?: string;
    status?: LeadStatus;
    sortBy?: "name" | "status" | "createdAt";
    order?: "asc" | "desc"
};

export class LeadsService {
    constructor(private readonly leadsRepository: LeadsRepository) { }

    async getAllLeadsPaginated(params: GetLeadsWithPaginationParams) {
        const { page = 1, pageSize = 10, name, status, sortBy, order } = params;
        const limit = pageSize;
        const offset = (page - 1) * limit;

        const where: LeadWhereParams = {};

        if (name) where.name = { like: name, mode: "insensitive" };
        if (status) where.status = status;

        const leads = await this.leadsRepository.find({ where, sortBy, order, limit, offset });
        const total = await this.leadsRepository.count(where);

        return {
            data: leads,
            meta: { page, pageSize: limit, total, totalPages: Math.ceil(total / limit) }
        };
    }

    async createLead(params: CreateLeadAttributes) {
        if (!params.status) params.status = "New";

        const newLead = await this.leadsRepository.create(params);

        return newLead;
    }

    async getLeadById(id: number) {
        const lead = await this.leadsRepository.findById(id);
        if (!lead) throw new HttpError(404, "Lead not found");

        return lead;
    }

    async updateLead(id: number, params: Partial<CreateLeadAttributes>) {
        const lead = await this.leadsRepository.findById(id);
        if (!lead) throw new HttpError(404, "Lead not found");


        if (lead.status === "New" && params.status !== undefined && params.status !== "Contacted") {
            throw new HttpError(400, "A New Lead must be Contacted before updating his status to any other value.");
        }

        if (params.status && params.status === "Archived") {
            const now = new Date();

            const diffTime = Math.abs(now.getTime() - lead.updatedAt.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays < 180) {
                throw new HttpError(400, "A Lead can only be Archived after 6 inactive months.");
            }
        }

        const updatedLead = await this.leadsRepository.updateById(id, params);

        return updatedLead;
    }

    async deleteLead(id: number) {
        const lead = await this.leadsRepository.findById(id);
        if (!lead) throw new HttpError(404, "Lead not found");

        const deletedLead = await this.leadsRepository.deleteById(id);

        return deletedLead;
    }
};

