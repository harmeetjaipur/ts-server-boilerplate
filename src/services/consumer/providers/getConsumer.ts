import Consumer from "../../../db/models/consumer";

type payload = {
  id: Number;
};

export const getConsumerPreference = ({ id }: payload) =>
  Consumer.find({ customerId: id, callback: (err: object, res: object) => console.log(res) });
