export const indexOf = (arr, item, fromIndex = 0) => {
  if (arr == null) return -1

  let len = arr.length
  let i = len < 0 ? len + fromIndex : fromIndex

  while (i < len) {
    if (arr[i] === item) return i

    i++
  }

  return -1
}
