export const isNull = (val) => {
  return (
    val === null &&
    Object.prototype.toString.call(val) === '[object Null]'
  )
}
