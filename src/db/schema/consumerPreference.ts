import mongoose, { Schema } from "mongoose";

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
    enum: ["Single Image Ad", "Carousel Ad"]
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

export default preferenceSchema;
