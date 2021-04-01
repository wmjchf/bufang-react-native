import {axiosPostJSON} from '@/libs/axios';

export const login = (data) => axiosPostJSON('/user/uMengMessageLogin', data);
