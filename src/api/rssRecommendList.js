import {axiosGet} from '@/libs/axios';

export const getRssRecommendList = (data) => axiosGet('/content/list', data);
