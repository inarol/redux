/**
 * 检测是否是纯粹的对象
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
export default function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false

  let proto = obj
  // while循环是解决object可能来自其他环境
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  // 简单实现可以用，Object.getPrototypeOf(proto) === Object.prototype
  // Ojbect.getPrototypeOf(proto)相当于proto.__proto
  return Object.getPrototypeOf(obj) === proto
}
