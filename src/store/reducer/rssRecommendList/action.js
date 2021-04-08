import {HANDLESUCCESS, HANDLESFAIL, RESET} from './action-types';
import {getRssRecommendList} from '@/api/rssRecommendList';
import {formatTime} from '@/utils/format';
// import { rando} from "@/utils";

export const getRssRecommendListData = (data) => {
  return async (dispatch) => {
    const res = await getRssRecommendList(data);
    let list = res.data.data.filter((item) => item.rssContent.rss);
    list = list.map((item) => {
      const regImage = /src="([^"]*)"/g;
      const regP = /<p>(.*?)<\/p>/g;
      const rssMsgImage = regImage.exec(
        item.rssContent.rss.channel.item[0].description,
      );
      let rssMsgContent = regP.exec(
        item.rssContent.rss.channel.item[0].description,
      );
      rssMsgContent =
        rssMsgContent && rssMsgContent[1].replace(/<[^<>]+>/g, '');
      return {
        rssId: item.rss.rssId,
        rssName: item.rssContent.rss.channel.title,
        rssImage: item.rss.rssImage,
        rssMsgTitle: item.rssContent.rss.channel.item[0].title,
        rssMsgImage: rssMsgImage && rssMsgImage[1],
        publishTime: formatTime(item.rssContent.rss.channel.lastBuildDate),
        rssMsgContent: rssMsgContent,
      };
    });
    dispatch(handleSuccess(list, res.data.pageNum, res.data.total));
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
