import createApplication from "./app";
import { createServer } from "http";

const app = createApplication();

createServer(app).listen(3000, () => {
  console.log(`Server listening on http://localhost:3000`);
});
