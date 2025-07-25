import { Handler } from "express";
import { Task } from "../models/Task";
import { z } from "zod";
import { HttpError } from "../errors/HttpError";

const StoreRequestSchema = z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["todo", "doing", "done"]),
    priority: z.enum(["high", "medium", "low"])
});

const UpdateRequestSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    status: z.enum(["todo", "doing", "done"]).optional(),
    priority: z.enum(["high", "medium", "low"]).optional()
});

class TaskController {
    // GET /api/tasks
    index: Handler = (req, res) => {
        const tasks = Task.findAll();
        return res.json(tasks);
    };

    // POST /api/tasks
    store: Handler = (req, res) => {
        // req.body { title, description, status, priority }
        if (!req.body) throw new HttpError(400, "No Body Req");
        const parsedBody = StoreRequestSchema.parse(req.body);
        const newTask = Task.create(parsedBody);

        res.status(201).json(newTask);
    };

    // GET /api/tasks/:id
    show: Handler = (req, res) => {
        const { id } = req.params;
        const task = Task.findById(+id);
        if (!task) throw new HttpError(404, "Task Not Found");

        return res.json(task);
    };

    // PUT /api/tasks/:id
    update: Handler = (req, res) => {
        if (!req.body) throw new HttpError(400, "No Body Req");

        const { id } = req.params;
        const parsedBody = UpdateRequestSchema.parse(req.body);

        if (Object.keys(parsedBody).length === 0) {
            throw new HttpError(400, "No valid fields provided for update");
        }

        const updatedTask = Task.update(+id, parsedBody);
        if (!updatedTask) throw new HttpError(404, "Task Not Found");

        return res.json(updatedTask);
    };

    // DELETE /api/tasks/:id
    delete: Handler = (req, res) => {
        const { id } = req.params;
        const deletedTask = Task.delete(+id);
        if (!deletedTask) throw new HttpError(404, "Task Not Found");

        return res.json(deletedTask);
    }
};

export { TaskController };