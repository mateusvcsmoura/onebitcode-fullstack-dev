import { Lead } from "@prisma/client";

export type LeadStatus = "New" | "Contacted" | "Qualified" | "Converted" | "Unresponsive" | "Disqualiefied" | "Archived";

export interface LeadWhereParams {
    name?: {
        like?: string;
        equals?: string;
        mode?: "default" | "insensitive"
    }

    status?: LeadStatus;
};

export interface FindLeadParams {
    where?: LeadWhereParams;
    sortBy?: "name" | "status" | "createdAt";
    order?: "asc" | "desc";
    limit?: number;
    offset?: number;
};

export interface CreateLeadAttributes {
    name: string;
    email: string;
    phone: string;
    status?: LeadStatus;
}

export interface LeadsRepository {
    find: (params: FindLeadParams) => Promise<Lead[]>;
    findById: (id: number) => Promise<Lead | null>;
    create: (attributes: CreateLeadAttributes) => Promise<Lead>;
    count: (where: LeadWhereParams) => Promise<number>;
    updateById: (id: number, attributes: Partial<CreateLeadAttributes>) => Promise<Lead | null>;
    deleteById: (id: number) => Promise<Lead | null>;
};

