export const filter = (arr = [], fn) => {
  let idx = 0
  let len = arr.length
  let results = []

  while (idx < len) {
    if (fn(arr[idx], idx, arr))
      results[results.length] = arr[idx]

    idx += 1
  }

  return results
}
