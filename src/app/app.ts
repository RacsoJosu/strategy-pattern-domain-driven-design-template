import type { Router , Express} from "express";
import express from "express";
import { StrategyManager } from "../api/excel/infraestructure/strategy-manager";
import { StrategyA } from "../api/excel/domain/strategy-a";
import { StrategyB } from "../api/excel/domain/strategy-b";
import { ExcelService } from "../api/excel/aplication/excel-service";


export function registerStrategies() {
  const registry = new StrategyManager();
  registry.register("strategyA", new StrategyA());
  registry.register("strategyB", new StrategyB());
  const serviceStrategies = new ExcelService(registry);

  console.log("Estrategies registradas exitosamente")
  return serviceStrategies


}

export function createApp({ router, app }: { router: Router, app: Express }) {
  app.use(express.json({ limit: "5mb" }));
  app.use(express.urlencoded({ limit: "5mb", extended: true }));
  app.use(router);
  registerStrategies()
  return app;
}
