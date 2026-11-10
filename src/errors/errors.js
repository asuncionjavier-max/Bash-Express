export class ScriptNotFoundError extends Error {
  constructor(message = "El script no se ha encontrado") {
    super(message);
    this.name = "ScriptNotFoundError";
    this.statusCode = 404;
  }
}
