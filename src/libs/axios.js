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
    const accessToken = await StorageUtil.get('accessToken');

    accessToken && (config.headers.accessToken = accessToken);
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
  const refreshToken = await StorageUtil.get('refreshToken');
  if (response) {
    const data = response.data;
    if (data.code === 91002) {
      const config = response.config;
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const res = await axiosGet('/user/accessTokenRefresh', {
            refreshToken: refreshToken,
          });
          if (res.code === 91004) {
            StorageUtil.clear();
          }
          await StorageUtil.save('accessToken', res.data.accessToken);
          await StorageUtil.save('refreshToken', res.data.refreshToken);
          // config.headers.Authorization = `Bearer ${res.access_token}`;
          config.headers.accessToken = res.data.accessToken;
          requests.forEach((cb) => cb(res.data.accessToken));
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
  }
  return response;
};

axios.interceptors.response.use(
  async (response) => {
    if (response.data.code === 91002) {
      const r = await checkSelfStatus(response);
      return r.data;
    }
    return response.data;
  },
  async (error) => {
    // const e = await checkSelfStatus(error.response);
    return error;
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
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err.message, 'a');
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
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function axiosDelete(url, params, config) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, {params})
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
