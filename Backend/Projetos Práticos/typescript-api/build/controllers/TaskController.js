"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const Task_1 = require("../models/Task");
const zod_1 = require("zod");
const HttpError_1 = require("../errors/HttpError");
const StoreRequestSchema = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    status: zod_1.z.enum(["todo", "doing", "done"]),
    priority: zod_1.z.enum(["high", "medium", "low"])
});
const UpdateRequestSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    status: zod_1.z.enum(["todo", "doing", "done"]).optional(),
    priority: zod_1.z.enum(["high", "medium", "low"]).optional()
});
class TaskController {
    constructor() {
        // GET /api/tasks
        this.index = (req, res) => {
            const tasks = Task_1.Task.findAll();
            return res.json(tasks);
        };
        // POST /api/tasks
        this.store = (req, res) => {
            // req.body { title, description, status, priority }
            if (!req.body)
                throw new HttpError_1.HttpError(400, "No Body Req");
            const parsedBody = StoreRequestSchema.parse(req.body);
            const newTask = Task_1.Task.create(parsedBody);
            res.status(201).json(newTask);
        };
        // GET /api/tasks/:id
        this.show = (req, res) => {
            const { id } = req.params;
            const task = Task_1.Task.findById(+id);
            if (!task)
                throw new HttpError_1.HttpError(404, "Task Not Found");
            return res.json(task);
        };
        // PUT /api/tasks/:id
        this.update = (req, res) => {
            if (!req.body)
                throw new HttpError_1.HttpError(400, "No Body Req");
            const { id } = req.params;
            const parsedBody = UpdateRequestSchema.parse(req.body);
            if (Object.keys(parsedBody).length === 0) {
                throw new HttpError_1.HttpError(400, "No valid fields provided for update");
            }
            const updatedTask = Task_1.Task.update(+id, parsedBody);
            if (!updatedTask)
                throw new HttpError_1.HttpError(404, "Task Not Found");
            return res.json(updatedTask);
        };
        // DELETE /api/tasks/:id
        this.delete = (req, res) => {
            const { id } = req.params;
            const deletedTask = Task_1.Task.delete(+id);
            if (!deletedTask)
                throw new HttpError_1.HttpError(404, "Task Not Found");
            return res.json(deletedTask);
        };
    }
}
exports.TaskController = TaskController;
;
