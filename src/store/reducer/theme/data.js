class Data {
  constructor(data) {
    this.value = data;
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
  mainColor: '#0096FF',
  unSelectTabColor: 'gray',
};
export default Data.getInstance(data);
