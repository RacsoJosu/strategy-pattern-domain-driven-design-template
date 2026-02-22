import { createRouter } from "./src/routes/index";
import { createApp } from "./src/app/app";
import express from "express";

// 2. Crear rutas inyectando el controlador
const server = express();
const transactionRoutes = createRouter();

// 3. Crear la aplicación Express con las rutas
const app = createApp({ router: transactionRoutes, app: server });

// 4. Iniciar el servidor
app.listen(3001, () => {
  console.log(`Servidor escuchando en http://localhost:3001 en modo development`);
});
