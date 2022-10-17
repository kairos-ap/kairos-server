import Bull from "bull";
import { config } from "../util/configUtil";

const createQueue = <T>(name: string) => {
  return new Bull<T>(name, {
    redis: config.QUEUE_SERVICE_URI,
  });
};

const addAndRetrieve = async <D, R>(queue: Bull.Queue<D>, data: D) => {
  const job = await queue.add(data);
  return (await job.finished()) as R;
};

const retrieve = async <R>(queue: Bull.Queue) => {
  return await addAndRetrieve<unknown, R>(queue, {});
};

export { createQueue, addAndRetrieve, retrieve };
