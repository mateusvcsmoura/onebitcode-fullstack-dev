import { Router } from "express";
import { TaskController } from "./controllers/TaskController";

const router = Router();
const taskController = new TaskController();

router.get('/tasks', taskController.index);
router.get('/tasks/:id', taskController.show);
router.post('/tasks', taskController.store);
router.put('/tasks/:id', taskController.update);
router.delete('/tasks/:id', taskController.delete);

export { router };