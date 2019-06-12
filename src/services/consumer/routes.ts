import { Request, Response } from "express";
import { MongoClient } from "mongodb";

import { HTTP401Error } from "../../utils/httpErrors";
import { db } from "../../db";
import { CONSUMER_DB, CONSUMER_PREFERENCES } from "../../config/constants";
import { addConsumer } from "./providers/addNew";

// const dbConnect = async () =>
//   // Database connect
//   await db.connect().then(
//     (client: MongoClient): object => {
//       const _db = client.db(CONSUMER_DB);
//       return client;
//     }
//   );

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("Hello world! I am a consumer preference api.");
    }
  },
  {
    path: "/api/v1/add",
    method: "post",
    handler: async (req: Request, res: Response) => {
      db.connect().then(async db => {
        console.log("db: ", await db);
        const cb = (consumer: object) => console.log(consumer);
        addConsumer(req.body, cb);
      });
      res.send("Lets pray now");
    }
  }
];
