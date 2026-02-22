import z from "zod";

export const rowSchema = z.object({
  name: z.string().catch(() => ""),
  age: z.number().nullable().catch(() => null),
  email: z.string().catch(() => ""),
});

export const excelRowSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.date(),
  email: z.string(),
});

export const excelRequestSchema = z.object({
  type: z.enum(["strategyA", "strategyB"]),
  value: z.array(z.any()),
});


export type Row = z.infer<typeof rowSchema>;
export type ExcelRow = z.infer<typeof excelRowSchema>;

export const dataSchema = z.array(rowSchema);
export type Data = z.infer<typeof dataSchema>;

export const excelDataSchema = z.array(excelRowSchema);
export type ExcelData = z.infer<typeof excelDataSchema>;


export const excelRowSchema2 = z.object({
  nombre: z.string(),
  apellido: z.string(),
  fechaNacimiento: z.date(),
  correo: z.string(),
});

export type ExcelRow2 = z.infer<typeof excelRowSchema2>;
export const excelDataSchema2 = z.array(excelRowSchema2);
export type ExcelData2 = z.infer<typeof excelDataSchema2>;
