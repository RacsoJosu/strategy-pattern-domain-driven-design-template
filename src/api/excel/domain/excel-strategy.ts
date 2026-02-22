import { Row } from "../helpers/schemas";

export interface ExcelStrategy {
  process(data: any): Row[];
}
