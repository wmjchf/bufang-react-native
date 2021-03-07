import {INITGLOBALHEIGHT, INITGLOBALWIDTH} from './action-types';

import data from './data';

export const global = (state = data.value, action) => {
  switch (action.type) {
    case INITGLOBALHEIGHT:
      return data.initHeight(action.height);
    case INITGLOBALWIDTH:
      return data.initWidth(action.width);
    default:
      return state;
  }
};
