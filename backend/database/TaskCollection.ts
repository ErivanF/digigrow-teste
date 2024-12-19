import mongoose from "mongoose";
import TaskModel from "../Core/TaskModel";
import TaskRepository from "../Core/TaskRepository";
import DBTask from "./TaskSchema";

export default class TaskCollection implements TaskRepository {
  async get() {
    const data = await DBTask.find();
    const taskList = data.map((task) => {
      const { name, description } = task;
      if (!name || !description) {
        throw new Error("Invalid task data");
      }
      const id = task._id.toString();
      return new TaskModel({ name, description, id });
    });
    return taskList;
  }
  async save(newTask: TaskModel) {
    const { name, description } = newTask;
    const newDBTask = new DBTask({ name, description });
    newDBTask.save();
    const id = newDBTask._id.toString();
    return new TaskModel({ name, description, id });
  }
  async delete(taskId: string) {
    const id = new mongoose.Types.ObjectId(taskId);
    await DBTask.findByIdAndDelete(id);
    return;
  }
}
