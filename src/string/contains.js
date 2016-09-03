import { toString } from 'lang'

export const contains = (str, subString, fromIndex) => {
  str = toString(str)
  subString = toString(subString)

  return str.indexOf(subString, fromIndex) !== -1
}
