import { Schema } from "mongoose";

const Templates = Object.freeze({
  Single: "Single Image Ad",
  Carousel: "Carousel Ad"
});

const Repeat = Object.freeze({
  Daily: "daily",
  Weekly: "weekly",
  Monthly: "monthly"
});

const preferenceSchema: Schema = new Schema({
  customerId: {
    type: Number,
    unique: true
  },
  name: {
    type: String
  },
  templateId: {
    type: String,
    enum: Object.values(Templates)
  },
  startDate: {
    type: Date
  },
  repeat: {
    type: String,
    enum: Object.values(Repeat)
  },
  isActive: { type: Boolean }
});

Object.assign(preferenceSchema.statics, {
  Templates
});

export default preferenceSchema;
