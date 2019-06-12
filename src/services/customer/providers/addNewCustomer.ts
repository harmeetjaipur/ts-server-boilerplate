import { NewCustomerType, CustomerPayloadItem } from "../../../db/types";
import CustomerPreferenceModel from "../../../db/models/customer";

const ID = () => {
  const num = Math.random().toString();
  return num.substr(2, num.length);
};

export const addCustomer = async ({ payload, callback }: NewCustomerType) => {
  payload.consumers.map(async (consumer: CustomerPayloadItem) => {
    const result = new CustomerPreferenceModel({
      customerId: consumer.customerId || ID(),
      name: consumer.name,
      templateId: consumer.templateId || "",
      startDate: consumer.startDate || new Date(),
      repeat: consumer.repeat || "",
      isActive: consumer.isActive || true
    });
    try {
      const newCustomer = await result.save();
      callback({ result: newCustomer, error: false });
      return newCustomer;
    } catch (err) {
      callback({ result: err, error: true });
    }
  });
};
