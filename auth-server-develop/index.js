import connectDb from "./config/db.js";
import app from "./app.js";
import { createServer } from "http";
import config from "./config/config.js";
import User from "./models/user.model.js";
// import UserService from "./service/user.service.js";
// import userService from "./service/user.service.js";

async function main() {
  await connectDb();
  const server = createServer(app);

  // await UserService.register('s@s','happy','happy1')
  // await UserService.login('s@s','happy')
  server.listen(config.port, () => {
    console.log(`${config.env} server listening on port ${config.port}`);
  });
}

main().catch((err) => console.error(err));
