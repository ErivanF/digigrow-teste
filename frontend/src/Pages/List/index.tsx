import { useEffect } from "react";
import { Container } from "./styles";
import { UseTask } from "../../Providers/TaskProvider";
import TaskCard from "../../Components/TaskCard/index.";

export default function ListPage() {
  const { GetList, tasks } = UseTask();
  useEffect(() => {
    GetList();
  }, []);
  return (
    <Container>
      {tasks.length ? (
        tasks.map((task) => <TaskCard key={task.id} {...task} />)
      ) : (
        <div className="empty">Não há tarefas</div>
      )}
    </Container>
  );
}
