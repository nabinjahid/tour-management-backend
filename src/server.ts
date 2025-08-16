/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";
import { seedSuperAdmin } from "./app/utils/seedSuperAdmin";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);
    console.log("connected to DB");

    server = app.listen(5000, () => {
      console.log(`server is listening to port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

(async () => {
    await startServer()
    await seedSuperAdmin()
})()

// Three type of error
// 1 unhandled rejection error
// 2 uncaught rejection error
// 3 signal terminator sigterm

process.on("unhandledRejection", (error) => {
  console.log("Unhandled rejection detected", error);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("uncaughtException", (error) => {
  console.log("Unhandled rejection detected", error);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal recived..... server shuting down");
  if (server) {
    process.exit(1);
  }
  process.exit(1);
});
process.on("SIGINT", () => {
  console.log("SIGINT signal recived..... server shuting down");
  if (server) {
    process.exit(1);
  }
  process.exit(1);
});
