import {combineReducers} from 'redux';
import {tabbar} from './tabbar';
import {theme} from './theme';
import {playList} from './playList';
import {categoryList} from './categoryList';
import {global} from './global';
import {rssRecommendList} from './rssRecommendList';
import {rssFollowList} from './rssFollowList';
import {followList} from './followList';
import {rssCollection} from './rssCollection';
import {rssHubList} from './rssHubList';

export default combineReducers({
  tabbar,
  theme,
  playList,
  categoryList,
  global,
  rssRecommendList,
  rssFollowList,
  rssCollection,
  followList,
  rssHubList,
});
