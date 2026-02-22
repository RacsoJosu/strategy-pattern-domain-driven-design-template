import { ExcelStrategy } from "./excel-strategy";
import { Data, excelDataSchema } from "../helpers/schemas";

export class StrategyA implements ExcelStrategy {

  process(data: Record<string, any>[]) {
    const excelData = excelDataSchema.parse(data);
    return excelData.map((row) => {
      return {
        name: row.firstName,
        age: row.dateOfBirth.getFullYear(),
        email: row.email,
      };
    });
  }
}
