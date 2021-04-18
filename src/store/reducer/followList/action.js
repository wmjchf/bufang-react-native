import {HANDLESUCCESS, HANDLESFAIL, RESET, LOAD} from './action-types';
import {getFollowList} from '@/api/rssRecommendList';
import {formatTime} from '@/utils/format';
// import { rando} from "@/utils";
const formatPContent = (reg, content) => {
  let str = '';
  for (let i = 0; i < 3; i++) {
    let rssMsgContent = reg.exec(content);
    rssMsgContent = rssMsgContent && rssMsgContent[1].replace(/<[^<>]+>/g, '');
    if (rssMsgContent) {
      str = str + rssMsgContent;
    }
  }
  return str;
};
export const getFollowListData = (data) => {
  return async (dispatch) => {
    dispatch(initLoading());
    const res = await getFollowList(data);
    dispatch(
      handleSuccess(res.data.data || [], res.data.pageNum, res.data.total),
    );
  };
};
export const handleSuccess = (data, pageNum, total) => {
  return {
    type: HANDLESUCCESS,
    dataList: data,
    pageNum,
    total,
  };
};
export const initLoading = () => {
  return {
    type: LOAD,
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
