import { CreatedTask, Task } from "../Types";

const BaseURL = "http://localhost:8000/";

export async function FetchTasks() {
  const response = await fetch(`${BaseURL}task`);
  return (await response.json()) as Task[];
}
export async function CreateTask(newTask: CreatedTask) {
  const response = await fetch(`${BaseURL}task`, {
    method: "POST",
    body: JSON.stringify(newTask),
  });
  return (await response.json()) as Task;
}
export async function DeleteTask(id: string) {
  await fetch(`${BaseURL}task/${id}`, {
    method: "DELETE",
  });
}
