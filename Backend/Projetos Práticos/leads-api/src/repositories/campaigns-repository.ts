import { Campaign } from "@prisma/client";

export type LeadCampaignStatus = "New" | "Engaged" | "FollowUp_Scheduled" | "Contacted" | "Qualified" | "Converted" | "Unresponsive" | "Disqualiefied" | "Re_Engaged" | "Opted_Out";

export interface AddLeadToCampaignAttributes {
    campaignId: number;
    leadId: number;
    status: LeadCampaignStatus;
};
export interface CreateCampaignAttributes {
    name: string;
    description: string;
    startDate: Date;
    endDate?: Date | undefined;
};

export interface CampaignsRepository {
    find: () => Promise<Campaign[]>;
    findById: (campaignId: number) => Promise<Campaign | null>;
    create: (attributes: CreateCampaignAttributes) => Promise<Campaign>;
    updateById: (campaignId: number, attributes: Partial<CreateCampaignAttributes>) => Promise<Campaign | null>;
    deleteById: (campaignId: number) => Promise<Campaign | null>;

    addLead: (attributes: AddLeadToCampaignAttributes) => Promise<void>;
    updateLeadStatus: (attributes: AddLeadToCampaignAttributes) => Promise<void>;
    removeLead: (campaignId: number, leadId: number) => Promise<void>;
};

