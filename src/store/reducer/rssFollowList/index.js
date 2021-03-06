import {HANDLESUCCESS, HANDLESFAIL, RESET} from './action-types';

import data from './data';

export const rssFollowList = (state = data.value, action) => {
  switch (action.type) {
    case HANDLESUCCESS:
      return data.handleSuccess(action.dataList, action.pageNum, action.total);
    case HANDLESFAIL:
      return data.handleFail();
    case RESET:
      return data.reset();
    default:
      return state;
  }
};
