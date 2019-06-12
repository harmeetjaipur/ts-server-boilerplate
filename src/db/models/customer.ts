type CustomerPayload = {
  id: string;
  callback: Function;
};
import mongoose from "mongoose";
import customerPreference from "../schema/customerPreference";

const CustomerPreferenceModel = mongoose.model("preferences", customerPreference, "preferences");

export default CustomerPreferenceModel;
