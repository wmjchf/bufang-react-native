import {combineReducers} from 'redux';
import {count} from './count';
import {todos} from './todos';
import {tabbar} from './tabbar';
import {theme} from './theme';

export default combineReducers({
  todos,
  count,
  tabbar,
  theme,
});
