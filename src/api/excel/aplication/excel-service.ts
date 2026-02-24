import { StrategyFactory } from "../infraestructure/strategy-factory";
import { StrategyKey } from "../infraestructure/strategy-manager";



export class ExcelService {
  constructor(private readonly strategyFactory: StrategyFactory) {}

  executeStrategy(type: StrategyKey,value: Record<string, any>[]) {
    const strategy = this.strategyFactory.getStrategy(type);
    return strategy.process(value);
  }
}
