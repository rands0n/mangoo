
/**
 * ES6 Number.isNaN
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
**/
export default function isNaN (val) {
  return typeof val === 'number' && val != val
}
