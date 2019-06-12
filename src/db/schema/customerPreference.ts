import { Schema } from "mongoose";
import * as CONSTANTS from "../../config/constants";

export const TEMPLATES = Object.freeze({
  SINGLEIMAGEAD: CONSTANTS.SINGLEIMAGEAD,
  CAROUSELAD: CONSTANTS.CAROUSELAD
});

export const REPEAT = Object.freeze({
  DAILY: CONSTANTS.DAILY,
  WEEKLY: CONSTANTS.WEEKLY,
  MONTHLY: CONSTANTS.MONTHLY
});

const preferenceSchema: Schema = new Schema({
  customerId: {
    type: Number
  },
  name: {
    type: String
  },
  templateId: {
    type: String,
    enum: Object.values(TEMPLATES)
  },
  startDate: {
    type: Date
  },
  repeat: {
    type: String,
    enum: Object.values(REPEAT)
  },
  isActive: { type: Boolean }
});

Object.assign(preferenceSchema.statics, {
  TEMPLATES,
  REPEAT
});

export default preferenceSchema;
