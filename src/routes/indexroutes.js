import express from "express";
import.meta.dirname;
const router = express.Router();

router.get("/health", (req, res) => {
  return res.status(200).json({
    ok: true,
    message: "La ruta funciona",
  });
});

export default router;
