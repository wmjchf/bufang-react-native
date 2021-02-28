import StorageUtil from './storage';
import {axiosGet, axiosPost} from './axios';

class DataStore {
  // 保存数据
  saveData(url, data) {
    if (!data || !url) {
      return;
    }
    StorageUtil.save(url, data);
  }
  // 获取本地数据
  async fetchLocalData(urlObject) {
    const getKey = Object.values(urlObject).join('/');
    const data = await StorageUtil.get(getKey);
    return data;
  }
  // 获取网络数据
  async fetchNetGetData(urlObject, params) {
    const saveKey = Object.values(urlObject).join('/');
    let res = null;
    try {
      res = await axiosGet(urlObject.url, params);
      this.saveData(saveKey, res);
    } catch (error) {
    } finally {
      return res;
    }
  }
  // 获取网络数据
  async fetchNetPostData(urlObject, params) {
    const saveKey = Object.values(urlObject).join('/');
    let res = null;
    try {
      res = await axiosPost(urlObject.url, params);
      this.saveData(saveKey, res);
    } catch (error) {
    } finally {
      return res;
    }
  }
}

export default new DataStore();
