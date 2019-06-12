import { addCustomer } from "../services/customer/providers/addNewCustomer";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

import { NewCustomerType } from "./types";
import CustomerPreference from "./models/customer";
import { addCustomer as addNew } from "../services/customer/providers/addNewCustomer";

const url: string = process.env.DATABASE_URL || "";

const models = { CustomerPreference };

const cb = (db: Object) => console.log("No callback found");

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

export default {
  addCustomer: ({ payload, callback }: NewCustomerType) => {
    return addNew({ payload, callback });
  },
  models
};
