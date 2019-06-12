type NewConsumerSuccess = {
  result: object;
  error: boolean;
};

import { Request, Response } from "express";

import { HTTP400Error } from "../../utils/httpErrors";
import { db } from "../../db";
import { CONSUMER_DB, CONSUMER_PREFERENCES } from "../../config/constants";

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
      db.addConsumer({
        payload: {
          name: req.body.name,
          templateId: req.body.templateId,
          startDate: req.body.startDate || new Date(),
          repeat: req.body.repeat,
          isActive: true
        },
        callback: ({ result, error }: NewConsumerSuccess) => {
          if (error) throw new HTTP400Error();
          else console.log(result);
        }
      });
      res.send("Lets pray now");
    }
  }
];
