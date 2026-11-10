import express from "express";
import scriptRoutes from "./routes.scripts.js";
const router = express.Router();

router.get("/health", (req, res) => {
  return res.status(200).json({
    ok: true,
    message: "La ruta funciona",
  });
});

router.use(scriptRoutes);

export default router;
