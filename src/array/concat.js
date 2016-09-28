export const concat = (arr = [], arr2 = []) => {
  let idx
  let len1 = arr.length
  let len2 = arr2.length
  let result = []

  idx = 0

  while (idx < len1) {
    result[result.length] = arr[idx]

    idx += 1
  }

  idx = 0

  while (idx < len2) {
    result[result.length] = arr2[idx]

    idx += 1
  }

  return result
}
