import mongoose, { Schema } from "mongoose";

const Templates = Object.freeze({
  Single: "Single Image Ad",
  Carousel: "Carousel Ad"
});

const preferenceSchema: Schema = new mongoose.Schema({
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
    enum: ["daily", "weekly", "monthly"]
  },
  isActive: { type: Boolean }
});

Object.assign(preferenceSchema.statics, {
  Templates
});

export default preferenceSchema;
