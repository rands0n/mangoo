/**
 * Copies the values of the source array to a new array. 
 */
export const copy = (arr) => {
  const length = arr.length
  const copy = []

  let index = -1

  while (++index < length) {
    copy[index] = arr[index]
  }

  return copy;
}
