import { CreatedTask, Task } from "../Types";

const BaseURL = "http://localhost:8000/";

export async function FetchTasks() {
  const data = await fetch(`${BaseURL}task`).then((response) => {
    return response.json();
  });
  return data as Task[];
}
export async function CreateTask(newTask: CreatedTask) {
  const body = JSON.stringify(newTask);
  fetch(`${BaseURL}task`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
}
export async function DeleteTask(id: string) {
  await fetch(`${BaseURL}task/${id}`, {
    method: "DELETE",
  });
}
