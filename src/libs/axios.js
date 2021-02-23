import axios from 'axios';
import {setting} from '../config';
import StorageUtil from './storage';
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求由于语法格式有误，服务器无法理解此请求。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
axios.defaults.baseURL = setting.baseUrl;
axios.defaults.timeout = 100000;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded; charset=utf-8';
// 创建一个axios实例
const instance = axios.create({});
// 是否正在刷新的标记
let isRefreshing = false;
// 重试队列，每一项将是一个待执行的函数形式
let requests = [];
// 请求拦截器
axios.interceptors.request.use(
  async (config) => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const refresh_token = await StorageUtil.get('refresh_token');
    const access_token = await StorageUtil.get(' access_token');
    const token =
      config.url === '/cms/user/refresh' ? refresh_token : access_token;
    // if (!token) {
    //   window.location.href = '/login';
    // }
    // token && (config.headers.Authorization = `Bearer ${token}`);
    return config;
  },
  (error) => {
    return Promise.error(error);
  },
);

const checkSelfStatus = async (response) => {
  const error = new Error();
  if (response) {
    const data = response.data;
    const status = response.status;
    error.message =
      typeof data === 'string' ? codeMessage[status] : data.message;
    error.code = data.code;
    if (data.code === 10051) {
      const config = response.config;
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const res = await axiosGet('/cms/user/refresh');
          StorageUtil.set('access_token', res.access_token);
          StorageUtil.set('refresh_token', res.refresh_token);
          config.headers.Authorization = `Bearer ${res.access_token}`;
          requests.forEach((cb) => cb(res.access_token));
          requests = [];
          return instance(config);
        } catch (err) {
          // window.location.href = '/login';
        } finally {
          isRefreshing = false;
        }
      } else {
        // 正在刷新token，将返回一个未执行resolve的promise
        return new Promise((resolve) => {
          // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
          requests.push((token) => {
            config.headers.Authorization = token;
            resolve(instance(config));
          });
        });
      }
    }
    if (data.code === 10013) {
      window.location.href = '/login';
    }
  } else {
    error.message = '连接超时，请稍后再试...';
  }
  return error;
};

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const e = await checkSelfStatus(error.response);
    throw e;
  },
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function axiosGet(url, params, config) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function axiosPost(url, params, config) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function axiosPostJSON(url, params) {
  const config = {
    headers: {
      'content-type': 'application/json',
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function axiosPostQuery(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
