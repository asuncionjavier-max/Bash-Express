import express from "express";
import { getScript } from "../controllers/controllers.scripts.js";

const router = express.Router();

router.get("/script/:name", getScript);

export default router;
