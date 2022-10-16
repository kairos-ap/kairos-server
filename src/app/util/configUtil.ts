import { z } from "zod";

const configSchema = z.object({
  QUEUE_SERVICE_URI: z.string(),
});

const config = configSchema.parse(process.env);

export { configSchema, config };
