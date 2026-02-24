import { Router } from "express";
import { excelRequestSchema } from "./helpers/schemas";
import { registerStrategies } from "../../app/app";
const router = Router();

router.post("/:strategy", async (req, res) => {
  try {
    const { strategy } = req.params;
    const values = await excelRequestSchema.parseAsync({ ...req.body, type: strategy });
    const response = registerStrategies().executeStrategy(values.type, values.value);
    res.json({ response });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
