import mongoose from "mongoose";

export default async function ConnectToDB() {
  const mongoURL = process.env.MONGO_URI_APP;
  if (!mongoURL) {
    console.log("Please add a mongo DB url to your configuration file");
    return;
  }
  console.log("ConnectionURI: " + mongoURL);
  mongoose
    .connect(mongoURL)
    .then(() => {
      console.log(mongoose.connection.readyState);
      console.log("Connected to database");
    })
    .catch((err) => {
      console.error("App starting error:", err.stack);
      process.exit(1);
    });
}
