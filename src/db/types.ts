export interface CustomerPayloadItem {
  name: string;
  templateId: string;
  startDate: Date;
  repeat: Array<string>;
  isActive: Boolean;
  customerId: Number;
}

export interface CustomerPayload extends Array<CustomerPayloadItem> {}

export interface NewCustomerType {
  payload: {
    consumers: CustomerPayload;
  };
  callback: Function;
}
