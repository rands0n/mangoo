import { isEmpty } from './isEmpty'

export const insert = (arr, items) => {
  if(isEmpty(arr)) return false

  Array.prototype.push.call(arr, items)
}