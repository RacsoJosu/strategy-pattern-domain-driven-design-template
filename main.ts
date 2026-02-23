import { createRouter } from "./src/routes/index";
import { createApp } from "./src/app/app";
import express from "express";
const server = express();
const transactionRoutes = createRouter();
const app = createApp({ router: transactionRoutes, app: server });
app.listen(3001, () => {
  console.log(`Servidor escuchando en http://localhost:3001 en modo development`);
});


