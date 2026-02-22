import { Router } from "express";
import fs from "fs";
import path from "path";

export function createRouter() {
  const router = Router();

  // Subimos un nivel desde router/
  const PATH_ROUTES = path.join(__dirname, "../api");

  const removeExtension = (fileName: string): string => {
    return fileName.split(".").shift() ?? "";
  };

  const folders = fs
    .readdirSync(PATH_ROUTES)
    .filter((file) =>
      fs.statSync(path.join(PATH_ROUTES, file)).isDirectory()
    );


    for (const folder of folders) {
      try {
        const routePath = path.join(PATH_ROUTES, folder, "router");
        const routeModule = require(routePath);
        console.log(`Cargando ruta /${folder}`);

        router.use(`/${folder}`, routeModule.default);
      } catch (error) {
      }
    }

  return router;
}
