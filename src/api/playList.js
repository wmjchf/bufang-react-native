import {axiosGet} from '../libs/axios';

export const getPlayListCategory = () => axiosGet('/playlist/hot');
