import { ExcelStrategy } from "../domain/excel-strategy";

// En domain/excel-strategy-factory.ts
export interface StrategyFactory {
  getStrategy(type: string): ExcelStrategy;
}
