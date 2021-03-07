class Data {
  constructor(data) {
    this.value = data;
  }
  initWidth(width) {
    this.value = {
      ...this.value,
      width,
    };
    return this.value;
  }
  initHeight(height) {
    this.value = {
      ...this.value,
      height,
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
  width: 0,
  height: 0,
};
export default Data.getInstance(data);
