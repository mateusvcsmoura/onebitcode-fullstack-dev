interface TaskAttributes {
    id: number;
    title: string;
    description: string;
    status: "todo" | "doing" | "done";
    priority: "high" | "medium" | "low";
    createdAt: Date;
    updatedAt: Date;
}

class Task {
    private static tasks: Task[] = [];
    private static sequence: number = 1;

    id: number;
    title: string;
    description: string;
    status: "todo" | "doing" | "done";
    priority: "high" | "medium" | "low";
    createdAt: Date;
    updatedAt: Date;

    constructor(attributes: TaskAttributes) {
        this.id = attributes.id;
        this.title = attributes.title;
        this.description = attributes.description;
        this.status = attributes.status;
        this.priority = attributes.priority;
        this.createdAt = attributes.createdAt;
        this.updatedAt = attributes.updatedAt;
    }

    static findAll(): Task[] {
        return [...this.tasks];
    }

    static findById(id: number): Task | null {
        return this.tasks.find((task) => task.id === id) ?? null;
    }

    static create(attributes: Omit<TaskAttributes, "id" | "createdAt" | "updatedAt">): Task {
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

    static update(id: number, attributes: Partial<Omit<TaskAttributes, "id" | "createdAt" | "updatedAt">>): Task | null {
        const { title, description, status, priority } = attributes;
        const task = this.findById(id);

        if (!task) return null;

        if (title !== undefined) task.title = title;
        if (description !== undefined) task.description = description;
        if (status !== undefined) task.status = status;
        if (priority !== undefined) task.priority = priority;

        task.updatedAt = new Date();

        return task;
    }

    static delete(id: number): Task | null {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) return null;

        return this.tasks.splice(taskIndex, 1)[0];
    }
};

Task.findAll();

export { Task };