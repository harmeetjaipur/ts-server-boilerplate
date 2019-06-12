import { removeCustomerPreferenceById } from "./providers/findAndRemoveCustomer";
import { getAll } from "./providers/getAllCustomers";
type NewCustomerSuccess = {
  result: object;
  error: boolean;
};

import { Request, Response } from "express";

import { HTTP400Error } from "../../utils/httpErrors";
import { db } from "../../db";
import { getCustomerPreference } from "./providers/getCustomer";

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
      const newCustomer = await db.addCustomer({
        payload: {
          consumers: req.body.consumers
        },
        callback: ({ result, error }: NewCustomerSuccess) => {
          if (error) throw new HTTP400Error();
          else console.log(result);
        }
      });
      res.send(newCustomer);
    }
  },
  {
    path: "/api/v1/findbyid",
    method: "post",
    handler: async (req: Request, res: Response) => {
      const consumer = await getCustomerPreference({ id: req.body.id });
      res.send(consumer);
    }
  },
  {
    path: "/api/v1/findall",
    method: "post",
    handler: async (req: Request, res: Response) => {
      const allCustomerPreferences = await getAll();
      res.send(allCustomerPreferences);
    }
  },
  {
    path: "/api/v1/delete",
    method: "post",
    handler: async (req: Request, res: Response) => {
      const removed = await removeCustomerPreferenceById({ id: req.body.id });
      res.send(removed);
    }
  }
];
