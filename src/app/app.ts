import type { Router , Express} from "express";
import express from "express";


export function createApp({ router, app }: { router: Router, app: Express }) {
  app.use(express.json({ limit: "5mb" }));
  app.use(express.urlencoded({ limit: "5mb", extended: true }));
  app.use(router);
  return app;
}
