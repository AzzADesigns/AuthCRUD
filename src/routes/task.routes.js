import  Router  from "express-promise-router";
import {createTask, deleteTask, getAllTasks, getTask, updateTask} from "../controllers/tasks.controller.js"
import { isAuth } from "../middlewares/auth.middleweare.js";

const router = Router();

router.get("/tasks", isAuth ,getAllTasks )

router.get("/tasks/:id", getTask)

router.post("/tasks",createTask)

router.put("/tasks/:id", updateTask)

router.delete("/tasks/:id", deleteTask)

export default router;