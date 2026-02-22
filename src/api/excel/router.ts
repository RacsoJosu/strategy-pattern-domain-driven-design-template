import { Router } from "express";
import { executeStrategy } from "./aplication/excel-service";
import { excelRequestSchema } from "./helpers/schemas";

const router = Router();

router.post("/:strategy", async (req, res) => {
  try {
    const { strategy } = req.params;
    const values = await excelRequestSchema.parseAsync({ ...req.body, type: strategy });

    const result = executeStrategy(values.type, values.value);

    res.json({ result });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
