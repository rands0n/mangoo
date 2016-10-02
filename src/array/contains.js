import { indexOf } from './indexOf'

export const contains = (arr, item) => {
  return indexOf(arr, item) !== -1
}
