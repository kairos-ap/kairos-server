import { Lesson } from "webuntis";
import { createQueue } from "..";
import untisClient, { createSession } from "../../untis";
import { getDuration } from "../../util/dateUtil";

interface TimetablesQueueData {
  classId: number;
  daysBefore: number;
  daysAfter: number;
}

const timetablesQueue = createQueue<TimetablesQueueData>("timetables");

timetablesQueue.process(async (job): Promise<Lesson[]> => {
  const { classId, daysBefore, daysAfter } = job.data;

  await createSession();

  const [startDate, endDate] = getDuration(daysBefore, daysAfter);
  return await untisClient.getTimetableForRange(startDate, endDate, classId, 1);
});

export default timetablesQueue;
export type { TimetablesQueueData };
