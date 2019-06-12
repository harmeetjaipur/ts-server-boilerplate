type ConsumerPayload = {
  id: string;
  callback: Function;
};
import mongoose from "mongoose";
import consumerPreference from "../schema/consumerPreference";

const ConsumerPreferenceModel = mongoose.model("preferences", consumerPreference, "preferences");

export default ConsumerPreferenceModel;
