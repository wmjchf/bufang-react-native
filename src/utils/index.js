// 判断是否是undefined
export function isUndefined(data) {
  return data === undefined;
}
// 判断是否是Null
export function isNull(data) {
  return data === null;
}
// 判读是否是number string boolean基本数据类型
export function isBaseType(data) {
  const type = typeof data;
  const baseType = ['string', 'number', 'boolean'];
  return (
    baseType.findIndex((v) => v === type) > -1 ||
    isUndefined(data) ||
    isNull(data)
  );
}
// 判断是否是数组类型
export function isArray(data) {
  return data instanceof Array;
}
// 深拷贝具体实现
export const deepCopy = (data) => {
  if (isBaseType(data)) {
    return data;
  }
  let object = {};
  if (isArray(data)) {
    object = [];
  }
  for (let key in data) {
    object[key] = deepCopy(data[key]);
  }
  return object;
};

// 数组乱序输出
export const randomArray = (array) => {
  const newArr = [];
  var len = array.length;
  for (let i = 0; i < len; i++) {
    var index = Math.floor(Math.random() * array.length); //随机下标
    newArr.push(array[index]); //将随机出的元素，存放新数组newArr中去
    array.splice(index, 1); //    将随机出的元素在arr中删除
  }
  //arr中删除随机出的元素,arr.length-1,同时i++,导致循环不会10次,会是5次.最后得到newArr中只有一半的随机数字,arr中剩下另一半. 将其合并到一起,得到res
  const res = [...newArr, ...array];
  return res;
};
