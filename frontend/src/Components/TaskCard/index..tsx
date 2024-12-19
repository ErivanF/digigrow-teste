import { UseTask } from "../../Providers/TaskProvider";
import { Task } from "../../Types";
import { Container } from "./styles";

export default function TaskCard({ id, name, description }: Task) {
  const Remove = UseTask().Remove;
  return (
    <Container>
      <details>
        <summary>{name}</summary>
        {description}
      </details>
      <button
        onClick={() => {
          Remove(id);
        }}
      >
        Remover
      </button>
    </Container>
  );
}
