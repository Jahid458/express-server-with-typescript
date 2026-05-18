import express, { Request, Response } from "express";

import config from "./config";
import initDB from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.route";
import { TodoRoutes } from "./modules/todo/todo.route";
import { authRoutes } from "./modules/auth/auth.route";

const app = express();
const port = config.port;

// parser
app.use(express.json());
// app.use(express.urlencoded());

// initializing DB
initDB();

// logger middleware

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello next level Developers");
});

app.use("/users", userRoutes);
app.use("/todos", TodoRoutes);
// auth
app.use("/auth", authRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
    path: req.path,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
