import { excelDataSchema2 } from "../helpers/schemas";
import { ExcelStrategy } from "./excel-strategy";


export class StrategyB implements ExcelStrategy {

  process(data: Record<string, any>[]) {
    const excelData = excelDataSchema2.parse(data);
    return excelData.map((row) => {
      return {
        name: row.nombre,
        age: row.fechaNacimiento.getFullYear(),
        email: row.correo,
      };
    });
  }
}
