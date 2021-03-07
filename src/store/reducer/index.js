import {combineReducers} from 'redux';
import {tabbar} from './tabbar';
import {theme} from './theme';
import {playList} from './playList';
import {categoryList} from './categoryList';
import {global} from './global';

export default combineReducers({
  tabbar,
  theme,
  playList,
  categoryList,
  global,
});
