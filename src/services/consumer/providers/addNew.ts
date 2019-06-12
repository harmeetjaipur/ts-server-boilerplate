import { NewConnsumerType } from "./../../../db/connect";
import ConsumerPreferenceModel from "../../../db/models/consumer";

export const addConsumer = async ({ payload, callback }: NewConnsumerType) => {
  const consumer = new ConsumerPreferenceModel({
    name: payload.name,
    templateId: payload.templateId || "",
    startDate: payload.startDate || new Date(),
    repeat: payload.repeat || "",
    isActive: payload.isActive || true
  });
  try {
    await consumer.save();
    callback(consumer);
  } catch (err) {
    console.log(err);
  }
};
