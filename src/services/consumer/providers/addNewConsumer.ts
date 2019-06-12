import { NewConsumerType, ConsumerPayloadItem } from "../../../db/types";
import ConsumerPreferenceModel from "../../../db/models/consumer";

const ID = () => {
  const num = Math.random().toString();
  return num.substr(2, num.length);
};

export const addConsumer = async ({ payload, callback }: NewConsumerType) => {
  payload.consumers.map(async (consumer: ConsumerPayloadItem) => {
    const result = new ConsumerPreferenceModel({
      customerId: consumer.customerId || ID(),
      name: consumer.name,
      templateId: consumer.templateId || "",
      startDate: consumer.startDate || new Date(),
      repeat: consumer.repeat || "",
      isActive: consumer.isActive || true
    });
    try {
      const newConsumer = await result.save();
      callback({ result: newConsumer, error: false });
      return newConsumer;
    } catch (err) {
      callback({ result: err, error: true });
    }
  });
};
