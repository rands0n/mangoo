export const forEach = (arr, fn) => {
  let idx = 0
  let length = arr.length

  while (idx < length) {
    if (fn(arr[idx], idx, arr) === false) break

    idx++
  }

  return arr
}
