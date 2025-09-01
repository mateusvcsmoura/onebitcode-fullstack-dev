import z from "zod";

const leadStatusSchema = z.enum(
    ["New", "Contacted", "Qualified", "Converted", "Unresponsive", "Disqualiefied", "Archived"]
);

export const createLeadRequestSchema = z.object({
    name: z.string({ error: "Lead Name must be a string" }),
    email: z.email({ error: "Lead E-mail must have a correct e-mail format." }),
    phone: z.string({ error: "Lead Phone Number must be a string" }),
    status: leadStatusSchema.optional()
});

export const updateLeadRequestSchema = z.object({
    name: z.string({ error: "Lead Name must be a string" }).optional(),
    email: z.email({ error: "Lead E-mail must have a correct e-mail format." }).optional(),
    phone: z.string({ error: "Lead Phone Number must be a string" }).optional(),
    status: leadStatusSchema.optional()
});

export const getLeadsRequestSchema = z.object({
    page: z.string().optional(),
    pageSize: z.string().optional(),
    name: z.string().optional(),
    status: leadStatusSchema.optional(),
    sortBy: z.enum(["name", "status", "createdAt"]).optional(),
    order: z.enum(["asc", "desc"]).optional()
});

