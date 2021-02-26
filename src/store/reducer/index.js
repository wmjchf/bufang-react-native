import {combineReducers} from 'redux';
import {tabbar} from './tabbar';
import {theme} from './theme';
import {playList} from './playList';

export default combineReducers({
  tabbar,
  theme,
  playList,
});
