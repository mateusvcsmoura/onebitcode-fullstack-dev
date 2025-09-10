import { Handler } from "express";
import { HttpError } from "../errors/HttpError";
import { createCampaignRequestSchema, updateCampaignRequestSchema } from "../schemas/campaignsRequestSchema";
import { CampaignsRepository } from "../repositories/campaigns-repository";

export class CampaignsController {
    constructor(private readonly campaignsRepository: CampaignsRepository) { }

    index: Handler = async (req, res, next) => {
        try {
            const campaigns = await this.campaignsRepository.find();

            return res.status(200).json(campaigns);
        } catch (e) {
            next(e);
        }
    }

    create: Handler = async (req, res, next) => {
        if (!req.body) throw new HttpError(400, "No req body");

        try {
            const body = createCampaignRequestSchema.parse(req.body);
            const newCampaign = await this.campaignsRepository.create(body);

            return res.status(201).json(newCampaign);
        } catch (e) {
            next(e);
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const campaign = await this.campaignsRepository.findById(Number(req.params.id));
            if (!campaign) throw new HttpError(404, "Campaign not found");

            return res.status(200).json(campaign);
        } catch (e) {
            next(e);
        }
    }

    update: Handler = async (req, res, next) => {
        if (!req.body) throw new HttpError(400, "No req body");

        try {
            const campaign = await this.campaignsRepository.findById(Number(req.params.id));
            if (!campaign) throw new HttpError(404, "Campaign not found");

            const body = updateCampaignRequestSchema.parse(req.body);
            const updatedCampaign = await this.campaignsRepository.updateById(Number(req.params.id), body);

            return res.status(200).json(updatedCampaign);
        } catch (e) {
            next(e);
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const campaign = await this.campaignsRepository.findById(Number(req.params.id));
            if (!campaign) throw new HttpError(404, "Campaign not found");

            const deletedCampaign = await this.campaignsRepository.deleteById(Number(req.params.id));

            return res.status(204).json(deletedCampaign);
        } catch (e) {
            next(e);
        }
    }
};

