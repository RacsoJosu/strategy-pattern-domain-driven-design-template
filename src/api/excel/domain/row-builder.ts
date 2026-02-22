import { Row, rowSchema } from "../helpers/schemas";


export class RowBuilder {
  private row: Partial<Row>;

  constructor(initialData: Partial<Row> = {}) {
    this.row = {
      ...initialData,
    };
  }

  setName(name: string): this {
    this.row.name = name;
    return this;
  }

  setAge(age?: number | null): this {
    this.row.age = age;
    return this;
  }

  setEmail(email: string): this {
    this.row.email = email;
    return this;
  }

  build() {
    return rowSchema.parse(this.row);
  }
}
