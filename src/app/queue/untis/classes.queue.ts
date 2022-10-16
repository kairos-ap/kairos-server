import { Klasse } from "webuntis";
import { createQueue } from "..";
import untisClient, { createSession } from "../../untis";

const classesQueue = createQueue("classes");

classesQueue.process(async (): Promise<Klasse[]> => {
  await createSession();
  return await untisClient.getClasses();
});

export default classesQueue;
