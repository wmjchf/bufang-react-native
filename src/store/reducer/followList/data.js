class Data {
  constructor(data) {
    this.value = data;
  }
  initLoading() {
    this.value = {
      ...this.value,
      isLoading: true,
    };
    return this.value;
  }
  handleSuccess(list, pageNum, total) {
    if (pageNum === 1) {
      this.reset();
    }
    const dataList = this.value.dataList.concat(list);
    const more = pageNum * this.value.size < total;
    this.value = {
      ...this.value,
      dataList,
      pageNum,
      total,
      more,
      isLoading: false,
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
      more: false,
      isLoading: true,
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
  more: false,
  isLoading: true,
};
export default Data.getInstance(data);
