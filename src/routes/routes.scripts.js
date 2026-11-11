import express from "express";
import { getScript, showScripts } from "../controllers/controllers.scripts.js";

const router = express.Router();

router.get("/script/:name", getScript);

router.get("/scripts", showScripts);

export default router;
