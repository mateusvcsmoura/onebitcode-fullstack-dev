import { Campaign } from "@prisma/client";

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
};

