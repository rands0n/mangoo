export const isArray = (arr) => {
  return (
    arr != null &&
    arr.length >= 0 &&
    Object.prototype.toString.call(arr) === '[object Array]'
  )
}
