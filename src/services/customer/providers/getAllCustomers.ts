import Customer from "../../../db/models/customer";

type payload = {
  id: Number;
};

export const getAll = () => Customer.find({});
