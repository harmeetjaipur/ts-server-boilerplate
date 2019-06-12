import Customer from "../../../db/models/customer";

type payload = {
  id: Number;
};

export const removeCustomerPreferenceById = ({ id }: payload) =>
  Customer.findOneAndDelete({ customerId: id, callback: (err: object, res: object) => console.log(res) });
