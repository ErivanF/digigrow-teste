import express, { Application } from "express";
import dotenv from "dotenv";
import CreateRoutes from "./routes/TaskRoutes";
import ConnectToDB from "./database/config";

dotenv.config();
const app: Application = express();
app.use(express.json());
ConnectToDB();

const port = process.env.PORT || 8000;
CreateRoutes(app);
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
