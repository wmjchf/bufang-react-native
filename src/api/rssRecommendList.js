import {axiosGet, axiosPostJSON, axiosDelete} from '@/libs/axios';

export const getRssRecommendList = (data) => axiosGet('/content/list', data);

export const getRssContent = (data) =>
  axiosGet(`/content/get/${data.rssId}`, data);

export const followRss = (data) => axiosPostJSON('/rssFollowing/follow', data);
// 包含上下文
export const getRssFollowList = (data) =>
  axiosGet('/rssFollowing/getFollowRss', data);
// 不包含上下文
export const getFollowList = (data) =>
  axiosGet('/rssFollowing/getFollows', data);

export const collectionRss = (data, bufUserId) =>
  axiosPostJSON(`/rssCollection/add?bufUserId=${bufUserId}`, data);

export const cancelCollection = (data) =>
  axiosDelete('/rssCollection/delete', data);

export const getCollectionList = (data) =>
  axiosGet('/rssCollection/list', data);

export const getCollectionCount = (data) =>
  axiosGet('/rssCollection/getCollectionCount', data);

export const getFollowCount = (data) =>
  axiosGet('/rssFollowing/getFollowCount', data);
