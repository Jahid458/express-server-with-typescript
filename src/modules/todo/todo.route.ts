import express, { Request, Response, Router } from "express";
import { TodoController } from "./todo.controller";

const router = express.Router();

router.post("/", TodoController.createTodo);
router.get("/", TodoController.getTodos);
router.get("/:id", TodoController.getSingleTodo);

router.put("/:id", TodoController.updateTodo);

router.delete("/:id", TodoController.deleteTodo);

export const TodoRoutes = router;
