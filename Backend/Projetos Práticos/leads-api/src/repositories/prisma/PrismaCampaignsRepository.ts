import { Campaign } from "@prisma/client";
import { AddLeadToCampaignAttributes, CampaignsRepository, CreateCampaignAttributes } from "../campaigns-repository";
import { prisma } from "../../database";

export class PrismaCampaignsRepository implements CampaignsRepository {
    find(): Promise<Campaign[]> {
        return prisma.campaign.findMany();
    };

    findById(campaignId: number): Promise<Campaign | null> {
        return prisma.campaign.findUnique({
            where: { id: campaignId },
            include: { leads: { include: { lead: true } } }
        });
    };

    create(attributes: CreateCampaignAttributes): Promise<Campaign> {
        return prisma.campaign.create({
            data: attributes
        });
    };

    async updateById(campaignId: number, attributes: Partial<CreateCampaignAttributes>): Promise<Campaign | null> {
        const campaignExists = await prisma.campaign.findUnique({ where: { id: campaignId } });
        if (!campaignExists) return null;

        return prisma.campaign.update({
            where: { id: campaignId },
            data: attributes
        });
    };

    async deleteById(campaignId: number): Promise<Campaign | null> {
        const campaignExists = await prisma.campaign.findUnique({ where: { id: campaignId } });
        if (!campaignExists) return null;

        return prisma.campaign.delete({
            where: { id: campaignId }
        });
    };

    async addLead(attributes: AddLeadToCampaignAttributes): Promise<void> {
        await prisma.leadCampaign.create({ data: attributes })
    }

    async updateLeadStatus(attributes: AddLeadToCampaignAttributes): Promise<void> {
        await prisma.leadCampaign.update({
            data: { status: attributes.status },
            where: {
                leadId_campaignId: {
                    campaignId: attributes.campaignId,
                    leadId: attributes.leadId
                }
            }
        });
    };

    async removeLead(campaignId: number, leadId: number): Promise<void> {
        await prisma.leadCampaign.delete({
            where: {
                leadId_campaignId: { campaignId, leadId }
            }
        });
    };

}

