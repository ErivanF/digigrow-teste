import { Application, Request, Response } from "express";
import {
  CreateTaskController,
  DeleteTaskController,
  GetTaskListController,
} from "../controllers/TaskController";

export default function CreateRoutes(app: Application) {
  app.post("/task", CreateTaskController);
  app.get("/task", GetTaskListController);
  app.delete("/task/:id", DeleteTaskController);
}
