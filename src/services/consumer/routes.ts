type NewConsumerSuccess = {
  result: object;
  error: boolean;
};

import { Request, Response } from "express";

import { HTTP400Error } from "../../utils/httpErrors";
import { db } from "../../db";

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
  }
];
