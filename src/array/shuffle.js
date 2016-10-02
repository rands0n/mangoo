import { copy } from './copy'

/**
 * Creates a copy of the source array and shuffle the values.
 */
export const shuffle = (source) => {
  const arr = copy(source)
  const size = arr.length

  let index = -1

  while (++index < size) {
    const rand = Math.floor(Math.random() * index)
    const value = arr[rand]

    arr[rand] = arr[index]
    arr[index] = value
  }

  return arr
}
