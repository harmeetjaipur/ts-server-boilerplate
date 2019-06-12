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

// const client = new MongoClient(url, { useNewUrlParser: true });

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;

console.log(url);

db.on("error", console.error.bind(console, "connection error:"));

export default {
  addConsumer: ({ payload, callback }: NewConnsumerType) => {
    return addNew({ payload, callback });
  },
  // client.then(res => {
  //   console.log(res.);
  //   // let preferences = {};
  //   // if (err) return err;
  //   // else preferences = client.db(CONSUMER_DB).collection(CONSUMER_PREFERENCES);
  //   // return preferences;
  // }),
  models
};
