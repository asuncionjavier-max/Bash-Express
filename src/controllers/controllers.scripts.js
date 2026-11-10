import { ScriptNotFoundError } from "../errors/errors.js";
import { runScript } from "../services/service.scripts.js";

export const getScript = async (req, res) => {
  try {
    const output = await runScript(req.params.name);
    res.status(200).json({
      script: req.params.name,
      output,
    });
  } catch (error) {
    if (error instanceof ScriptNotFoundError) {
      res.status(404).json({
        error: error.message,
      });
      console.error(error);
      res.status(500).json({
        error: "internal server error",
      });
    }
  }
};
