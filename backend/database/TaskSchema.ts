import mongoose from "./config";
import { Schema } from "mongoose";

const TaskSchema = new Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
});

const DBTask = mongoose.model("Task", TaskSchema);
export default DBTask;
