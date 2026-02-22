import { StrategyKey, strategyManager } from "../infraestructure/strategy-manager";


export function executeStrategy(type: StrategyKey, value: Record<string, any>[]){
    const strategy = strategyManager.getStrategy(type);
    return strategy.process(value);
  }

