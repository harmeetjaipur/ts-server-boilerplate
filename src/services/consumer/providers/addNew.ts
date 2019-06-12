import ConsumerPreferenceModel from "../../../db/models/consumer";

export const addConsumer = async (payload: any, callback: Function) => {
  const consumer = new ConsumerPreferenceModel({
    name: payload.name
    // templateId: payload.template,
    // startDate: payload.date || new Date(),
    // repeat: {
    //   type: String,
    //   enum: ["daily", "weekly", "monthly"]
    // },
    // isActive: { type: Boolean }
  });
  try {
    callback(consumer);
    await consumer.save();
  } catch (err) {
    console.log(err);
  }
};
