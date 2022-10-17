import { Router } from "express";
import { param } from "express-validator";
import { Klasse } from "webuntis";
import { retrieve } from "../../queue";
import classesQueue from "../../queue/untis/classes.queue";
import { hasParams } from "../../util/routesUtil";

const router = Router();

router.get("/", async (_, res) => {
  const classes = await retrieve<Klasse[]>(classesQueue);
  res.status(200).send(classes);
});

router.get(
  "/:classId",
  param("classId").isNumeric().exists(),
  hasParams,
  async (req, res) => {
    const classes = await retrieve<Klasse[]>(classesQueue);
    const klasse = classes.find(
      (klasse) => klasse.id === parseInt(req.params.id)
    );

    if (!klasse) {
      return res.status(404).send("Target class not found.");
    }

    res.status(200).send(klasse);
  }
);

export default router;
