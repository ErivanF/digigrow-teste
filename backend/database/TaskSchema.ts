import { model, Schema } from "mongoose";

const TaskSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const DBTask = model("Task", TaskSchema);
export default DBTask;
