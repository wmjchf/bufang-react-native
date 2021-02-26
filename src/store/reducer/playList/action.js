import {HANDLESUCCESS, HANDLESFAIL, RESET} from './action-types';
import {getPlayList} from '@/api/playList';

export const getPlayListData = (data) => {
  return async (dispatch) => {
    const res = await getPlayList(data);
    dispatch(handleSuccess(res.playlists));
  };
};
export const handleSuccess = (data) => {
  return {
    type: HANDLESUCCESS,
    dataList: data,
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
