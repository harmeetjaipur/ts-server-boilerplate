import Consumer from "../../../db/models/consumer";

type payload = {
  id: Number;
};

export const removeConsumerPreferenceById = ({ id }: payload) =>
  Consumer.findOneAndDelete({ customerId: id, callback: (err: object, res: object) => console.log(res) });
