import express from "express";
import { userControllers } from "./user.controller";
import logger from "../../middleware/logger";
import auth from "../../middleware/auth";

const router = express.Router();

// route --> controller --> service

router.post("/", userControllers.createUser);
 
router.get("/",logger,auth(), userControllers.getUser);

router.get("/:id", userControllers.getSingleUser);

router.put("/:id", userControllers.updateUser);

router.delete("/:id", userControllers.DeleteUser);

export const userRoutes = router;
