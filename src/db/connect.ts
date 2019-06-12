import { MongoClient } from "mongodb";

import ConsumerPreference from "./models/consumer";
import { CONSUMER_DB, CONSUMER_PREFERENCES } from "../config/constants";

const url: string = process.env.DATABASE_URL || "";
let _db = {};

const models = { ConsumerPreference };

const cb = (db: Object) => console.log("No callback found");

const client = new MongoClient(url, { useNewUrlParser: true });

export default {
  connect: async function() {
    return await client.connect(async err => {
      if (err) return err;
      else _db = client.db(CONSUMER_DB);
      console.log(typeof _db);
      return _db;
    });
  },
  models
};
