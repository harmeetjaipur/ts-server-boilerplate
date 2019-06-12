import Customer from "../../../db/models/customer";

type payload = {
  id: Number;
};

export const getCustomerPreference = ({ id }: payload) =>
  Customer.find({ customerId: id, callback: (err: object, res: object) => console.log(res) });
