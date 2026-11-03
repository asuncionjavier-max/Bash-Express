import app from "./app.js";

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto http://localhost:${PORT}`);
});
