export interface NewConnsumerType {
  payload: { name: string; templateId: string; startDate: Date; repeat: Array<string>; isActive: Boolean };
  callback: Function;
}

import { MongoClient } from "mongodb";
import mongoose from "mongoose";

import ConsumerPreference from "./models/consumer";
import { CONSUMER_DB, CONSUMER_PREFERENCES } from "../config/constants";
import { addConsumer as addNew } from "../services/consumer/providers/addNew";

const url: string = process.env.DATABASE_URL || "";

const models = { ConsumerPreference };

const cb = (db: Object) => console.log("No callback found");

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

export default {
  addConsumer: ({ payload, callback }: NewConnsumerType) => {
    return addNew({ payload, callback });
  },
  models
};
