import { Handler } from "express";
import { createGroupRequestSchema, updateGroupRequestSchema } from "../schemas/groupsRequestSchema";
import { HttpError } from "../errors/HttpError";
import { GroupsRepository } from "../repositories/groups-repository";

export class GroupsController {
    constructor(private readonly groupsRepository: GroupsRepository) { }

    index: Handler = async (req, res, next) => {
        try {
            const groups = await this.groupsRepository.find();

            return res.status(200).json(groups);
        } catch (e) {
            next(e);
        }
    }

    create: Handler = async (req, res, next) => {
        if (!req.body) throw new HttpError(400, "No req body");

        try {
            const body = createGroupRequestSchema.parse(req.body);
            const newGroup = await this.groupsRepository.create(body);

            return res.status(201).json(newGroup);
        } catch (e) {
            next(e);
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const group = await this.groupsRepository.findById(Number(req.params.id));
            if (!group) throw new HttpError(404, "Group not found");

            return res.status(200).json(group);
        } catch (e) {
            next(e);
        }
    }

    update: Handler = async (req, res, next) => {
        try {
            const body = updateGroupRequestSchema.parse(req.body);

            const updatedGroup = await this.groupsRepository.updateById(Number(req.params.id), body);
            if (!updatedGroup) throw new HttpError(404, "Group not found");

            return res.status(200).json(updatedGroup);
        } catch (e) {
            next(e);
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const deletedGroup = await this.groupsRepository.deleteById(Number(req.params.id));
            if (!deletedGroup) throw new HttpError(404, "Group not found");

            return res.status(204).json(deletedGroup);
        } catch (e) {
            next(e);
        }
    }
};

