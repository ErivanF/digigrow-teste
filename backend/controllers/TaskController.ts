import { Request, Response } from "express";
import TaskModel from "../Core/TaskModel";
import TaskCollection from "../database/TaskCollection";

export async function CreateTaskController(req: Request, res: Response) {
  const { name, description } = req.body;
  if (!name || !description) {
    res
      .status(400)
      .json({ message: "Please provide both name and description." });
    return;
  }
  const task = new TaskModel({ name, description });
  const repo = new TaskCollection();
  const savedTask = await repo.save(task);
  res.status(201).json(savedTask.data());
}
export async function GetTaskListController(req: Request, res: Response) {
  const repo = new TaskCollection();
  const tasks = await repo.get();
  res.json(tasks.map((task) => task.data()));
}
export async function DeleteTaskController(req: Request, res: Response) {
  const id = req.params.id;
  const repo = new TaskCollection();
  await repo.delete(id);
  res.status(204).send();
}
