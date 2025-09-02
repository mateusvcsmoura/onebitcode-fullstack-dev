import { Handler } from "express";
import { prisma } from "../database";
import { HttpError } from "../errors/HttpError";
import { createCampaignRequestSchema, updateCampaignRequestSchema } from "../schemas/campaignsRequestSchema";

export class CampaignsController {
    index: Handler = async (req, res, next) => {
        try {
            const campaigns = await prisma.campaign.findMany();

            return res.status(200).json(campaigns);
        } catch (e) {
            next(e);
        }
    }

    create: Handler = async (req, res, next) => {
        if (!req.body) throw new HttpError(400, "No req body");

        try {
            const body = createCampaignRequestSchema.parse(req.body);
            const newCampaign = await prisma.campaign.create({ data: body });

            return res.status(201).json(newCampaign);
        } catch (e) {
            next(e);
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const campaign = await prisma.campaign.findUnique({
                where: { id: Number(req.params.id) },
                include: { leads: true }
            });

            if (!campaign) throw new HttpError(404, "Campaign not found");

            return res.status(200).json(campaign);
        } catch (e) {
            next(e);
        }
    }

    update: Handler = async (req, res, next) => {
        if (!req.body) throw new HttpError(400, "No req body");

        try {
            const campaign = await prisma.campaign.findUnique({ where: { id: Number(req.params.id) } });
            if (!campaign) throw new HttpError(404, "Campaign not found");

            const body = updateCampaignRequestSchema.parse(req.body);
            const updatedCampaign = await prisma.campaign.update({ where: { id: Number(req.params.id) }, data: body });

            return res.status(200).json(updatedCampaign);
        } catch (e) {
            next(e);
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const campaign = await prisma.campaign.findUnique({ where: { id: Number(req.params.id) } });
            if (!campaign) throw new HttpError(404, "Campaign not found");

            const deletedCampaign = await prisma.campaign.delete({ where: { id: Number(req.params.id) } });

            return res.status(204).json(deletedCampaign);
        } catch (e) {
            next(e);
        }
    }
};

