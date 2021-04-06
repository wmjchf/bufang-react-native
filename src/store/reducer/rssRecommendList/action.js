import {HANDLESUCCESS, HANDLESFAIL, RESET} from './action-types';
import {getRssRecommendList} from '@/api/rssRecommendList';

export const getRssRecommendListData = (data) => {
  return async (dispatch) => {
    const res = await getRssRecommendList(data);
    let list = res.data.data.filter((item) => item.rssContent.rss);
    list = list.map((item) => {
      const regImage = /src="([^"]*)"/g;
      const rssMsgImage = [];
      let regResult = null;
      while (
        (regResult = regImage.exec(
          item.rssContent.rss.channel.item[0].description,
        ))
      ) {
        rssMsgImage.push(regResult[1]);
      }
      return {
        rssId: item.rss.rssId,
        rssName: item.rssContent.rss.channel.title,
        rssImage: item.rss.rssImage,
        rssMsgTitle: item.rssContent.rss.channel.item[0].title,
        rssMsgImage: rssMsgImage,
      };
    });

    dispatch(handleSuccess(list));
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
