class Data {
  constructor(data) {
    this.value = data;
  }
  handleSuccess(list, isCover) {
    const dataList = isCover ? list : this.value.dataList.concat(list);
    this.value = {
      ...this.value,
      dataList,
    };
    return this.value;
  }
  handleFail() {
    const dataList = this.value.dataList.concat([]);
    this.value = {
      ...this.value,
      dataList,
    };
    return this.value;
  }
  reset() {
    this.value = {
      ...this.value,
      dataList: [],
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
};
export default Data.getInstance(data);
