import Consumer from "../../../db/models/consumer";

type payload = {
  id: Number;
};

export const getAll = () => Consumer.find({});
