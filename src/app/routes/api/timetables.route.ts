import { Router } from "express";
import { param } from "express-validator";
import { Lesson } from "webuntis";
import { addAndRetrieve } from "../../queue";
import timetablesQueue, {
  TimetablesQueueData,
} from "../../queue/untis/timetables.queue";
import { hasParams } from "../../util/routesUtil";

const router = Router();

router.get(
  "/:classId",
  param("classId").isNumeric().exists(),
  hasParams,
  async (req, res) => {
    const timetables = await addAndRetrieve<TimetablesQueueData, Lesson[]>(
      timetablesQueue,
      {
        classId: parseInt(req.params.classId),
        /* TODO: Regulate these parameters */
        daysBefore: 14,
        daysAfter: 14,
      }
    );

    res.status(200).send(timetables);
  }
);

export default router;
