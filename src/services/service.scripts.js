import { execFile } from "node:child_process";
import { error } from "node:console";
import path from "node:path";

const SCRIPTS = {
  uptime: path.join(import.meta.dirname, "..", "..", "scripts", "uptime.sh"),
  whoami: path.join(import.meta.dirname, "..", "..", "scripts", "whoami.sh"),
};

export function runScript(name) {
  if (!Object.hasOwn(SCRIPTS, name)) {
    return Promise.reject(new Error("Script no permitido"));
  }
  return new Promise((resolve, reject) => {
    execFile("bash", [SCRIPTS[name]], { timeout: 5000 }, (error, stdout) => {
      if (error) return reject(error);
      resolve(stdout.trim());
    });
  });
}
