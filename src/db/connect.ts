import { MongoClient } from "mongodb";
import mongoose from "mongoose";

import { NewConsumerType } from "./types";
import ConsumerPreference from "./models/consumer";
import { addConsumer as addNew } from "../services/consumer/providers/addNew";

const url: string = process.env.DATABASE_URL || "";

const models = { ConsumerPreference };

const cb = (db: Object) => console.log("No callback found");

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

export default {
  addConsumer: ({ payload, callback }: NewConsumerType) => {
    return addNew({ payload, callback });
  },
  models
};
