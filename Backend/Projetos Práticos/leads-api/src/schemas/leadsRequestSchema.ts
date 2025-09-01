import z from "zod";

export const createLeadRequestSchema = z.object({
    name: z.string({ error: "Lead Name must be a string" }),
    email: z.email({ error: "Lead E-mail must have a correct e-mail format." }),
    phone: z.string({ error: "Lead Phone Number must be a string" }),
    status: z.enum(["New", "Contacted", "Qualified", "Converted", "Unresponsive", "Disqualiefied", "Archived"]).optional()
});

export const updateLeadRequestSchema = z.object({
    name: z.string({ error: "Lead Name must be a string" }).optional(),
    email: z.email({ error: "Lead E-mail must have a correct e-mail format." }).optional(),
    phone: z.string({ error: "Lead Phone Number must be a string" }).optional(),
    status: z.enum(["New", "Contacted", "Qualified", "Converted", "Unresponsive", "Disqualiefied", "Archived"]).optional()
});

