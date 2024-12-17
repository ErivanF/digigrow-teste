import { Application, Request, Response } from "express";

export default function CreateRoutes(app: Application) {
  app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Express & TypeScript Server");
  });
}
