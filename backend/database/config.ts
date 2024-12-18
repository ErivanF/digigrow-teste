import mongoose from "mongoose";
const mongoURL = process.env.MONGO_URL;
if (!mongoURL) {
  console.log("Please add a mongo DB url to your configuration file");
} else {
  mongoose.connect(mongoURL);
}
export default mongoose;
