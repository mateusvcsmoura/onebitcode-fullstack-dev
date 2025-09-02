import z from "zod";

export const createCampaignRequestSchema = z.object({
    name: z.string({ error: "Campaign name must be a string" }),
    description: z.string({ error: "Campaign description must be a string" }),
    startDate: z.coerce.date({ error: "Start Date must be a Date" }),
    endDate: z.coerce.date({ error: "End Date must be a Date" }).optional()
});

export const updateCampaignRequestSchema = z.object({
    name: z.string({ error: "Campaign name must be a string" }).optional(),
    description: z.string({ error: "Campaign description must be a string" }).optional(),
    startDate: z.coerce.date({ error: "Start Date must be a Date" }).optional(),
    endDate: z.coerce.date({ error: "End Date must be a Date" }).optional()
});

