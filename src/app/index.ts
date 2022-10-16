import express from "express";
import classesRoute from "./routes/api/classes.route";
import timetablesRoute from "./routes/api/timetables.route";

const createApplication = () => {
  const app = express();

  app.use("/api/classes", classesRoute);
  app.use("/api/timetables", timetablesRoute);

  return app;
};

export default createApplication;
