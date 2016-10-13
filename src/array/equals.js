import { isEmpty } from './isEmpty'

export const equals = (source, comparator) => {
  if (isEmpty(source)) return false

  let len = source.length
  let idx = 0

  while (idx < len) {
    if (source[idx] !== comparator[idx]) return false

    idx++
  }

  return true
}
