import { StrategyA } from "../domain/strategy-a";
import { StrategyB } from "../domain/strategy-b";

const strategies = {
  strategyA: new StrategyA(),
  strategyB: new StrategyB(),
} as const;

export type StrategyKey = keyof typeof strategies;

export const strategyManager = {
  getStrategy: (key: StrategyKey) => strategies[key],
};
