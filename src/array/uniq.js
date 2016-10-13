import { filter } from './filter'
import { isArray } from '../lang/isArray'

export const uniq = (arr) => {
  if (!isArray(arr)) return []

  return filter(arr, (item, i) => {
    while (++i < arr.length) {
      if (item === arr[i]) return false
    }

    return true
  })
}
