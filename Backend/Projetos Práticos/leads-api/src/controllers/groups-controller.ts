import { Handler } from "express";
import { prisma } from "../database";
import { createGroupRequestSchema, updateGroupRequestSchema } from "../schemas/groupsRequestSchema";
import { HttpError } from "../errors/HttpError";

export class GroupsController {
    index: Handler = async (req, res, next) => {
        try {
            const groups = await prisma.group.findMany();

            return res.status(200).json(groups);
        } catch (e) {
            next(e);
        }
    }

    create: Handler = async (req, res, next) => {
        if (!req.body) throw new HttpError(400, "No req body");

        try {
            const body = createGroupRequestSchema.parse(req.body);
            const newGroup = await prisma.group.create({ data: body });

            return res.status(201).json(newGroup);
        } catch (e) {
            next(e);
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const group = await prisma.group.findUnique({
                where: { id: Number(req.params.id) },
                include: { leads: true }
            });

            if (!group) throw new HttpError(404, "Group not found");

            return res.status(200).json(group);
        } catch (e) {
            next(e);
        }
    }

    update: Handler = async (req, res, next) => {
        try {
            const group = await prisma.group.findUnique({ where: { id: Number(req.params.id) } });
            if (!group) throw new HttpError(404, "Group not found");

            const body = updateGroupRequestSchema.parse(req.body);
            const updatedGroup = await prisma.group.update({ where: { id: Number(req.params.id) }, data: body });

            return res.status(200).json(updatedGroup);
        } catch (e) {
            next(e);
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const group = await prisma.group.findUnique({ where: { id: Number(req.params.id) } });
            if (!group) throw new HttpError(404, "Group not found");

            const deletedGroup = await prisma.group.delete({ where: { id: Number(req.params.id) } });

            return res.status(204).json(deletedGroup);
        } catch (e) {
            next(e);
        }
    }
};

