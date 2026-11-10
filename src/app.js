import express from "express";
import indexRoutes from "./routes/index.js";
import.meta.dirname;
const app = express();

app.use("/api", indexRoutes);

export default app;
