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
