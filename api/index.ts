import express, { Request, Response } from "express";
import routes from "./routes/routes";

const app = express();

const AUTHOR = process.env.AUTHOR || "Desconocido";

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: `Welcome to the API - Desarrollado por: ${AUTHOR}`,
    status: "running",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/v1", routes);

export default app;
