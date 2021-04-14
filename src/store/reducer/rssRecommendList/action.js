import {HANDLESUCCESS, HANDLESFAIL, RESET, LOAD} from './action-types';
import {getRssRecommendList} from '@/api/rssRecommendList';
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
export const getRssRecommendListData = (data) => {
  return async (dispatch) => {
    dispatch(initLoading());
    const res = await getRssRecommendList(data);
    let list = res.data.data.filter((item) => {
      return item.rssContent.rss;
    });
    list = list.map((item) => {
      const regImage = /src="([^"]*)"/g;
      const regP = /<p>(.*?)<\/p>/g;
      const rssMsgImage = regImage.exec(
        item.rssContent.rss.channel.item[0].description,
      );
      const rssMsgContent = formatPContent(
        regP,
        item.rssContent.rss.channel.item[0].description,
      );
      console.log(item.rssContent.rss.channel.item[0].link);
      return {
        rssId: item.rss.rssId,
        rssName: item.rssContent.rss.channel.title,
        rssImage: item.rss.rssImage,
        rssMsgTitle: item.rssContent.rss.channel.item[0].title,
        rssMsgImage: rssMsgImage && rssMsgImage[1],
        publishTime: formatTime(item.rssContent.rss.channel.lastBuildDate),
        rssMsgContent: rssMsgContent,
        link: item.rssContent.rss.channel.link,
        contentLink: item.rssContent.rss.channel.item[0].link,
      };
    });
    dispatch(handleSuccess(list, res.data.pageNum, res.data.total));
  };
};
export const initLoading = () => {
  return {
    type: LOAD,
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
