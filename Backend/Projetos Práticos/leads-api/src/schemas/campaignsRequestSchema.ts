import { error } from "console";
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

const leadCampaignStatusSchema = z.enum(["New", "Engaged", "FollowUp_Scheduled", "Contacted", "Converted", "Unresponsive", "Qualified", "Disqualiefied", "Re_Engaged", "Opted_Out"]);

export const getCampaignLeadsRequestSchema = z.object({
    page: z.string().optional(),
    pageSize: z.string().optional(),
    name: z.string().optional(),
    status: leadCampaignStatusSchema.optional(),
    sortBy: z.enum(["name", "createdAt"]).optional(),
    order: z.enum(["asc", "desc"]).optional()
});

export const addLeadRequestSchema = z.object({
    leadId: z.number({ error: "Lead ID must be a number" }),
    status: leadCampaignStatusSchema.optional()
});

export const updateLeadStatusRequestSchema = z.object({
    status: leadCampaignStatusSchema
});
