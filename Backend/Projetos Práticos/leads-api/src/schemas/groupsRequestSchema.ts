import z from "zod";

export const createGroupRequestSchema = z.object({
    name: z.string({ error: "Group name must be a string" }),
    description: z.string({ error: "Group description must be a string" })
});

export const updateGroupRequestSchema = z.object({
    name: z.string({ error: "Group name must be a string" }).optional(),
    description: z.string({ error: "Group description must be a string" }).optional()
});

export const addLeadRequestSchema = z.object({
    leadId: z.number({ error: "Lead ID must be a number" })
});

