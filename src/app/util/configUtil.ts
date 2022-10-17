import { z } from "zod";

const configSchema = z.object({
  QUEUE_SERVICE_URI: z.string(),

  UNTIS_SCHOOL: z.string(),
  UNTIS_BASE_URL: z.string(),
  UNTIS_USERNAME: z.string(),
  UNTIS_PASSWORD: z.string(),
});

const config = configSchema.parse(process.env);

export { configSchema, config };
