import { ExcelStrategy } from "../domain/excel-strategy";
import { StrategyA } from "../domain/strategy-a";
import { StrategyB } from "../domain/strategy-b";
import { StrategyFactory } from "./strategy-factory";

const strategies = {
  strategyA: new StrategyA(),
  strategyB: new StrategyB(),
} as const;

export type StrategyKey = keyof typeof strategies;


export class StrategyManager implements StrategyFactory {
   private strategies = new Map<string, ExcelStrategy>();

    register(key: string, strategy: ExcelStrategy): void {
    this.strategies.set(key, strategy);
  }


  getStrategy(type: StrategyKey) {
    const startegy = strategies[type];
    if (!startegy) {
      throw new Error("Strategy not found");
    }
    return startegy;
  }
}

