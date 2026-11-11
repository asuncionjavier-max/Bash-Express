import { execFile } from "node:child_process";
import path from "node:path";
import { ScriptNotFoundError } from "../errors/errors.js";

const SCRIPTS_DIR = path.join(import.meta.dirname, "..", "..", "scripts");

const SCRIPTS = {
  uptime: path.join(SCRIPTS_DIR, "uptime"),
  whoami: path.join(SCRIPTS_DIR, "whoami"),
};

export function runScript(name) {
  if (!Object.hasOwn(SCRIPTS, name)) {
    return Promise.reject(new ScriptNotFoundError());
  }
  return new Promise((resolve, reject) => {
    execFile("bash", [SCRIPTS[name]], { timeout: 5000 }, (error, stdout) => {
      if (error) return reject(error);
      resolve(stdout.trim());
    });
  });
}

export const listScripts = () => Object.keys(SCRIPTS);
