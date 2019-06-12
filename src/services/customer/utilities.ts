import { REPEAT } from "../../db/schema/customerPreference";

import * as CONSTANTS from "../../config/constants";

export const getRepeat = (value: string) => {
  switch (value) {
    case CONSTANTS.DAILY:
      return REPEAT.DAILY;
    case CONSTANTS.WEEKLY:
      return REPEAT.WEEKLY;
    case CONSTANTS.MONTHLY:
      return REPEAT.MONTHLY;
  }
};
