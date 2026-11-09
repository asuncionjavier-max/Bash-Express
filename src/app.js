import express from "express";
import indexRoutes from "./src/routes/index.js";
import.meta.dirname;
const app = express();

app.use(indexRoutes);

export default app;
