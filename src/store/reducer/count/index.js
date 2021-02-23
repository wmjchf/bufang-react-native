import {INSCREASE, DECREASE} from './action-types';
export const count = (state = 0, action) => {
  switch (action.type) {
    case INSCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};
