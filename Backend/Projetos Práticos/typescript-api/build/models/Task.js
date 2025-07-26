"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(attributes) {
        this.id = attributes.id;
        this.title = attributes.title;
        this.description = attributes.description;
        this.status = attributes.status;
        this.priority = attributes.priority;
        this.createdAt = attributes.createdAt;
        this.updatedAt = attributes.updatedAt;
    }
    static findAll() {
        return [...this.tasks];
    }
    static findById(id) {
        var _a;
        return (_a = this.tasks.find((task) => task.id === id)) !== null && _a !== void 0 ? _a : null;
    }
    static create(attributes) {
        const { title, description, status, priority } = attributes;
        const newTask = new Task({
            id: this.sequence++,
            title,
            description,
            status,
            priority,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        this.tasks.push(newTask);
        return newTask;
    }
    static update(id, attributes) {
        const { title, description, status, priority } = attributes;
        const task = this.findById(id);
        if (!task)
            return null;
        if (title !== undefined)
            task.title = title;
        if (description !== undefined)
            task.description = description;
        if (status !== undefined)
            task.status = status;
        if (priority !== undefined)
            task.priority = priority;
        task.updatedAt = new Date();
        return task;
    }
    static delete(id) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex === -1)
            return null;
        return this.tasks.splice(taskIndex, 1)[0];
    }
}
exports.Task = Task;
Task.tasks = [];
Task.sequence = 1;
;
Task.findAll();
