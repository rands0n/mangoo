import { isEmpty } from './isEmpty'

export const compact = (arr) => {
  let index = -1
  let length = isEmpty(arr) ? 0 : arr.length
  let idx = 0
  let results = []

  while (++index < length) {
    let val = arr[index]

    if (val) results[idx++] = val
  }

  return results
}
