import configureEnv from "./utils/configureEnv";
configureEnv();

import http from "http";
import express from "express";

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

// Middlewares:
// - adding more middlewares requires no change here
// - create new middleware(s) under ./middleware and import it in ./middleware/index.ts
import { applyMiddleware, applyRoutes } from "./utils";
import errorHandlers from "./middleware/errorHandlers";
import middleware from "./middleware";

// Routes:
// - add new functionality under ./service directory
// - import their routes in ./service/index.ts to add new routes
import routes from "./services";

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);
