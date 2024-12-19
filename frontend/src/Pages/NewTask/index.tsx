import { useState } from "react";
import { Container } from "./styles";
import { CreatedTask } from "../../Types";
import { UseTask } from "../../Providers/TaskProvider";

export default function NewTask() {
  const [newTask, setNewTask] = useState<CreatedTask>({
    name: "",
    description: "",
  });
  const { Add } = UseTask();
  return (
    <Container>
      <input
        placeholder="Nome da tarefa"
        value={newTask.name}
        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
      />
      {!newTask.name && <div className="error">Campo obrigatório</div>}
      <input
        placeholder="Descrição"
        value={newTask.description}
        onChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
      />
      {!newTask.description && <div className="error">Campo obrigatório</div>}
      <button
        onClick={() => {
          Add(newTask);
        }}
      >
        Criar Tarefa
      </button>
    </Container>
  );
}
