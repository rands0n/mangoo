/**
 * Appends an array to the end of another
 * The first array will be modified
 */
export const append = (arr, arr2) => {
  if (arr2 == null) return arr

  const pad = arr.length
  const len = arr2.length
  let i = -1

  while (++i < len) arr[pad + i] = arr2[i]

  return arr
}
