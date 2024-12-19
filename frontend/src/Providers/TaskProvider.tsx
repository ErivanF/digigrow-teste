import { createContext, ReactNode, useContext, useState } from "react";
import { Task, CreatedTask } from "../Types";
import { CreateTask, DeleteTask, FetchTasks } from "../Services";

interface ITaskContext {
  GetList: () => Promise<void>;
  Add: (newTask: CreatedTask) => Promise<void>;
  Remove: (id: string) => Promise<void>;
  tasks: Task[];
}
interface IProps {
  children: ReactNode;
}
const TaskContext = createContext({} as ITaskContext);
export default function TaskProvider({ children }: IProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const GetList = async () => {
    FetchTasks().then((tasks) => {
      setTasks(tasks);
    });
  };
  const Add = async (newTask: CreatedTask) => {
    CreateTask(newTask);
  };
  const Remove = async (id: string) => {
    DeleteTask(id).then(() => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    });
  };

  return (
    <TaskContext.Provider value={{ tasks, GetList, Add, Remove }}>
      {children}
    </TaskContext.Provider>
  );
}
export const UseTask = () => useContext(TaskContext);
