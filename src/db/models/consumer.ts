import mongoose from "mongoose";

import consumerPreference from "../schema/consumerPreference";

const ConsumerPreferenceModel = mongoose.model(
  "ConsumerPreferenceModel",
  consumerPreference
);

export default ConsumerPreferenceModel;
