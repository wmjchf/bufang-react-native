import {axiosGet} from '@/libs/axios';

export const getRssTypeList = (data) => axiosGet('/rssTypes/list', data);

export const getRssHubList = (data) => axiosGet('/rssHub/list', data);
