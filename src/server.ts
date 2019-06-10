import configureEnv from "./utils/configure-env";
configureEnv();

import http from "http";
import express from "express";

// Middlewares:
// - adding more middlewares requires no change here
// - create new middleware(s) under ./middleware and import it in ./middleware/index.ts
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";

// Routes:
// - add new functionality under ./service directory
// - import their routes in ./service/index.ts to add new routes
import routes from "./services";

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

console.log(process.env.NODE_ENV);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);
