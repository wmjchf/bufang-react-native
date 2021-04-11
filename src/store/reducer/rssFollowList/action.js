import {HANDLESUCCESS, HANDLESFAIL, RESET} from './action-types';
import {getRssFollowList} from '@/api/rssRecommendList';
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
export const getRssFollowListData = (data) => {
  return async (dispatch) => {
    const res = await getRssFollowList(data);
    res.data.data.filter((item) => {
      return item.rssContent.rss;
    });
    const list =
      res.data.data &&
      res.data.data.map((item) => {
        const regImage = /src="([^"]*)"/g;
        const regP = /<p>(.*?)<\/p>/g;
        const rssMsgImage = regImage.exec(
          item.rssContent.channel.item[0].description,
        );
        const rssMsgContent = formatPContent(
          regP,
          item.rssContent.channel.item[0].description,
        );
        return {
          rssId: item.rssContent.channel.item[0].link,
          rssName: item.rssContent.channel.title,
          rssImage: item.rss.rssImage,
          rssMsgTitle: item.rssContent.channel.item[0].title,
          rssMsgImage: rssMsgImage && rssMsgImage[1],
          publishTime: formatTime(item.rssContent.channel.lastBuildDate),
          rssMsgContent: rssMsgContent,
          collectionFlag: item.collectionFlag,
          content: item,
        };
      });
    dispatch(handleSuccess(list || [], res.data.pageNum, res.data.total));
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
