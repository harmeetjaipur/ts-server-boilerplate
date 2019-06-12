type consumerPayload = {
  name: string;
};
import mongoose from "mongoose";
import consumerPreference from "../schema/consumerPreference";

consumerPreference.statics.findById = async function(id: string) {
  try {
    let consumer = await this.findOne({
      consumerId: id
    });
    if (!consumer) {
      consumer = await this.findOne({ name: consumer });
    }
    return consumer;
  } catch (err) {
    console.error(`Error fetching user by id:  ${id}`);
  }
};

const ConsumerPreferenceModel = mongoose.model("ConsumerPreferenceModel", consumerPreference);

export default ConsumerPreferenceModel;
