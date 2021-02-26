import {handleFail} from './action';
import {HANDLESUCCESS, HANDLESFAIL, RESET} from './action-types';

import data from './data';

export const playList = (state = data.value, action) => {
  switch (action.type) {
    case HANDLESUCCESS:
      return data.handleSuccess(action.dataList);
    case HANDLESFAIL:
      return data.handleFail();
    case RESET:
      return data.reset();
    default:
      return state;
  }
};
