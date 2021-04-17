import {combineReducers} from 'redux';
import {tabbar} from './tabbar';
import {theme} from './theme';
import {playList} from './playList';
import {categoryList} from './categoryList';
import {global} from './global';
import {rssRecommendList} from './rssRecommendList';
import {rssFollowList} from './rssFollowList';
import {rssCollection} from './rssCollection';

export default combineReducers({
  tabbar,
  theme,
  playList,
  categoryList,
  global,
  rssRecommendList,
  rssFollowList,
  rssCollection,
});
