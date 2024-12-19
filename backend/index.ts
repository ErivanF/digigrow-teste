import express, { Application } from "express";
import dotenv from "dotenv";
import CreateRoutes from "./routes/TaskRoutes";
import ConnectToDB from "./database/config";
import cors from "cors";
dotenv.config();
const app: Application = express();

app.use(express.json());
app.use(cors());
ConnectToDB();
const port = process.env.PORT || 8000;
CreateRoutes(app);
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
