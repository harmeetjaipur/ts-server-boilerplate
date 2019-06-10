import configureEnv from "./utils/configureEnv";
configureEnv();

import http from "http";
import express from "express";
import bodyParser from "body-parser";

import { db } from "./db";

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

// App setup
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res) => {
  res.status(404);
});
applyMiddleware(middleware, app);
applyRoutes(routes, app);
applyMiddleware(errorHandlers, app);

// Server setup
const { PORT = 3000 } = process.env;
const server = http.createServer(app);

// Database connect
db.connect({ closeDbConnection: true });

server.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}...`));
