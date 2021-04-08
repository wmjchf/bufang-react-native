import {axiosGet} from '@/libs/axios';

export const getRssRecommendList = (data) => axiosGet('/content/list', data);

export const getRssContent = (rssId) => axiosGet(`/content/get/${rssId}`);
