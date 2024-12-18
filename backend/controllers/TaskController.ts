import { Request, Response } from "express";
import TaskModel from "../Core/TaskModel";
import TaskCollection from "../database/TaskCollection";

export async function CreateTask(req: Request, res: Response) {
  const { name, description } = req.body;
  if (!name || !description) {
    return res
      .status(400)
      .json({ message: "Please provide both name and description." });
  }
  const task = new TaskModel({ name, description });
  const repo = new TaskCollection();
  const savedTask = await repo.save(task);
  res.status(201).json(savedTask.data());
}
export async function GetTasks(req: Request, res: Response) {
  const repo = new TaskCollection();
  const tasks = await repo.get();
  res.json(tasks.map((task) => task.data()));
}
export async function DeleteTask(req: Request, res: Response) {
  const id = req.params.id;
  const repo = new TaskCollection();
  await repo.delete(id);
  res.status(204).send();
}
