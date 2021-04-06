import {combineReducers} from 'redux';
import {tabbar} from './tabbar';
import {theme} from './theme';
import {playList} from './playList';
import {categoryList} from './categoryList';
import {global} from './global';
import {rssRecommendList} from './rssRecommendList';

export default combineReducers({
  tabbar,
  theme,
  playList,
  categoryList,
  global,
  rssRecommendList,
});
