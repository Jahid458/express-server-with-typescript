import express, { Request, Response, Router } from "express";
import { pool } from "../../config/db";
import { userControllers } from "./user.controller";

const router = express.Router();

// app.use("/users", userRoutes)
// route --> controller --> service

router.post("/", userControllers.createUser);

router.get("/", userControllers.getUser);

export const userRoutes = router;
