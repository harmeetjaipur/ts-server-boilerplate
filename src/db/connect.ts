type ConnectPayload = {
  callback: Function;
  closeDbConnection: boolean;
  dbName: string;
};

import MongoDb from "mongodb";

import { CONSUMER_DB, CONSUMER_PREFERENCES } from "../config/constants";

import ConsumerPreference from "./models/consumer";

const url: string = process.env.DATABASE_URL || "";

let _db: Object;

const models = { ConsumerPreference };

const cb = () => console.log("No callback found.");

const client = new MongoDb.MongoClient(url, { useNewUrlParser: true });

export default {
  connect: ({ callback = cb, closeDbConnection = true, dbName = CONSUMER_DB }) => {
    try {
      client.connect(err => {
        if (err) throw err;
        else _db = client.db(dbName);
        if (closeDbConnection) client.close();
        return callback();
      });
    } catch (err) {
      console.log("Error connecting:", err);
    }
  },
  getDb: function() {
    return _db;
  },
  models
};
