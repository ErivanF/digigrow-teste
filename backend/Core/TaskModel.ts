interface ICreateTask {
  id?: string;
  name: string;
  description: string;
}
export default class Task {
  id?: string;
  name: string;
  description: string;

  constructor({ id, name, description }: ICreateTask) {
    if (id) {
      this.id = id;
    }
    this.name = name;
    this.description = description;
  }
  data() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
    };
  }
}
