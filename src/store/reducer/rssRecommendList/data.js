class Data {
  constructor(data) {
    this.value = data;
  }
  // initPageInfo(pageNum, total) {
  //   this.value = {
  //     ...this.value,
  //     pageNum,
  //     total,
  //   };
  //   return this.value;
  // }
  handleSuccess(list, pageNum, total) {
    if (pageNum === 1) {
      this.value = {
        ...this.value,
        dataList: [],
        pageNum: 1,
        total: 0,
      };
    }
    const dataList = this.value.dataList.concat(list);
    this.value = {
      ...this.value,
      dataList,
      pageNum,
      total,
    };
    return this.value;
  }
  handleFail() {
    const dataList = this.value.dataList.concat([]);
    this.value = {
      ...this.value,
      dataList,
      pageNum: 1,
      total: 0,
    };
    return this.value;
  }
  reset() {
    this.value = {
      ...this.value,
      dataList: [],
      pageNum: 1,
      total: 0,
    };
    return this.value;
  }
  //静态方法
  static getInstance(data) {
    if (!this.instance) {
      this.instance = new Data(data);
    }
    return this.instance;
  }
}
const data = {
  dataList: [],
  pageNum: 1,
  total: 0,
  size: 10,
};
export default Data.getInstance(data);
