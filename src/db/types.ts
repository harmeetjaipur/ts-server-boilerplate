export interface ConsumerPayloadItem {
  name: string;
  templateId: string;
  startDate: Date;
  repeat: Array<string>;
  isActive: Boolean;
  customerId: Number;
}

export interface ConsumerPayload extends Array<ConsumerPayloadItem> {}

export interface NewConsumerType {
  payload: {
    consumers: ConsumerPayload;
  };
  callback: Function;
}
