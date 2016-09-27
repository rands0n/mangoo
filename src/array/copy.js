/**
 * Copies the values of the source array to a new array.
 */
export const copy = (arr = []) => {
  let len = arr.length
  let copy = []

  let index = -1

  while (++index < len) copy[index] = arr[index]

  return copy
}
