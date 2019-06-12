type ConsumerPayload = {
  id: string;
  callback: Function;
};
import mongoose from "mongoose";
import consumerPreference from "../schema/consumerPreference";

consumerPreference.statics.findById = async function({ id, callback }: ConsumerPayload) {
  try {
    let consumer = await this.findOne({
      consumerId: id
    });
    if (!consumer) {
      consumer = await this.findOne({ name: consumer });
    }
    callback(consumer);
  } catch (err) {
    console.error(`Error fetching user by id:  ${id}`);
  }
};

const ConsumerPreferenceModel = mongoose.model("preferences", consumerPreference);

export default ConsumerPreferenceModel;
