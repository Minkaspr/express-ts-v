import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to the API",
    status: "running",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/v1", (req: Request, res: Response) => {
  res.send("Esta ruta funciona");
});

export default app;
