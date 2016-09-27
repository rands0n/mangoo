export const filter = (fn, arr = []) => {
  let idx = 0
  let len = arr.length
  let results = []

  while (idx < len) {
    if (fn(arr[idx])) results[results.length] = arr[idx]

    idx += 1
  }

  return results
}
