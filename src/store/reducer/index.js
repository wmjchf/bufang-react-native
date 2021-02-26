import {combineReducers} from 'redux';
import {count} from './count';
import {todos} from './todos';
import {tabbar} from './tabbar';
import {theme} from './theme';
import {playList} from './playList';

export default combineReducers({
  todos,
  count,
  tabbar,
  theme,
  playList,
});
