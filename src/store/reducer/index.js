import {combineReducers} from 'redux';
import {count} from './count';
import {todos} from './todos';

export default combineReducers({
  todos,
  count,
});
