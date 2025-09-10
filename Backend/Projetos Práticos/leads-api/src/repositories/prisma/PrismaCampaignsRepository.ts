import { Campaign } from "@prisma/client";
import { CampaignsRepository, CreateCampaignAttributes } from "../campaigns-repository";
import { prisma } from "../../database";

export class PrismaCampaignsRepository implements CampaignsRepository {
    find(): Promise<Campaign[]> {
        return prisma.campaign.findMany();
    };

    findById(campaignId: number): Promise<Campaign | null> {
        return prisma.campaign.findUnique({
            where: { id: campaignId },
            include: { leads: true }
        });
    };

    create(attributes: CreateCampaignAttributes): Promise<Campaign> {
        return prisma.campaign.create({
            data: attributes
        });
    };

    updateById(campaignId: number, attributes: Partial<CreateCampaignAttributes>): Promise<Campaign | null> {
        return prisma.campaign.update({
            where: { id: campaignId },
            data: attributes
        });
    };

    deleteById(campaignId: number): Promise<Campaign | null> {
        return prisma.campaign.delete({
            where: { id: campaignId }
        });
    };

}