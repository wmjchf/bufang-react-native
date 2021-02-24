import {axiosGet} from '../libs/axios';

export const getPlayListCategory = () => axiosGet('/playlist/hot');

export const getPlayList = (data) => axiosGet('/top/playlist', data);
