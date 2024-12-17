import Task from "./TaskModel";

export default interface TaskRepository {
  get: () => Promise<Task[]>;
  save: (newTask: Task) => Promise<Task>;
  delete: (taskId: string) => Promise<void>;
}
