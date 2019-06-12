import { getAll } from "./providers/getAllConsumers";
type NewConsumerSuccess = {
  result: object;
  error: boolean;
};

import { Request, Response } from "express";

import { HTTP400Error } from "../../utils/httpErrors";
import { db } from "../../db";
import { getConsumerPreference } from "./providers/getConsumer";

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
      const newConsumer = await db.addConsumer({
        payload: {
          consumers: req.body.consumers
        },
        callback: ({ result, error }: NewConsumerSuccess) => {
          if (error) throw new HTTP400Error();
          else console.log(result);
        }
      });
      res.send(newConsumer);
    }
  },
  {
    path: "/api/v1/findbyid",
    method: "post",
    handler: async (req: Request, res: Response) => {
      const consumer = await getConsumerPreference({ id: req.body.id });
      res.send(consumer);
    }
  },
  {
    path: "/api/v1/findall",
    method: "post",
    handler: async (req: Request, res: Response) => {
      const allConsumerPreferences = await getAll();
      res.send(allConsumerPreferences);
    }
  },
  {
    path: "/api/v1/delete",
    method: "post",
    handler: async (req: Request, res: Response) => {
      const allConsumerPreferences = await getAll();
      res.send(allConsumerPreferences);
    }
  }
];
