import {HANDLESUCCESS, HANDLESFAIL, RESET} from './action-types';
// import {getPlayList} from '@/api/playList';
import dataStore from '@/libs/dataStore';
import {handleTagsData} from './utils';

export const getCategoryListData = (data) => {
  return async (dispatch) => {
    const resultLocal = await dataStore.fetchLocalData({
      url: '/playlist/hot',
    });
    let tags = resultLocal && handleTagsData(resultLocal.tags);
    tags && dispatch(handleSuccess(tags, false));
    const resultNet = await dataStore.fetchNetGetData(
      {url: '/playlist/hot'},
      {},
      (saveKey, newRes) => {
        dataStore.saveData(saveKey, newRes);
      },
    );
    tags = resultNet && handleTagsData(resultNet.tags);
    resultNet && dispatch(handleSuccess(tags, true));
  };
};
export const handleSuccess = (data, isCover) => {
  return {
    type: HANDLESUCCESS,
    dataList: data,
    isCover,
  };
};
export const handleFail = () => {
  return {
    type: HANDLESFAIL,
  };
};
export const reset = () => {
  return {
    type: RESET,
  };
};
