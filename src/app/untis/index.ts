import UntisClient from "webuntis";
import { config } from "../util/configUtil";

const untisClient = new UntisClient(
  config.UNTIS_SCHOOL,
  config.UNTIS_USERNAME,
  config.UNTIS_PASSWORD,
  config.UNTIS_BASE_URL
);

const createSession = async () => {
  if (!(await untisClient.validateSession())) {
    await untisClient.login();
  }
};

export default untisClient;
export { createSession };
