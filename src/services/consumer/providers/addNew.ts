import { NewConnsumerType } from "./../../../db/connect";
import ConsumerPreferenceModel from "../../../db/models/consumer";

const ID = () => {
  const num = Math.random().toString();
  return num.substr(2, num.length);
};

export const addConsumer = async ({ payload, callback }: NewConnsumerType) => {
  const consumer = new ConsumerPreferenceModel({
    customerId: ID(),
    name: payload.name,
    templateId: payload.templateId || "",
    startDate: payload.startDate || new Date(),
    repeat: payload.repeat || "",
    isActive: payload.isActive || true
  });
  try {
    const newConsumer = await consumer.save();
    callback({ result: newConsumer, error: false });
  } catch (err) {
    callback({ result: err, error: true });
  }
};
