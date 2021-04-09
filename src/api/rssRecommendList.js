import {axiosGet, axiosPostJSON} from '@/libs/axios';

export const getRssRecommendList = (data) => axiosGet('/content/list', data);

export const getRssContent = (data) =>
  axiosGet(`/content/get/${data.rssId}`, data);

export const followRss = (data) => axiosPostJSON('/rssFollowing/follow', data);

export const getRssFollowList = (data) =>
  axiosGet('/rssFollowing/getFollowRss', data);
