import { isEmpty } from './isEmpty'

export const tail = (arr) => {
  return isEmpty(arr) ? [] : arr.slice(1, arr.length)
}
