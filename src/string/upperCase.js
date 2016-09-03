import { toString } from 'lang'

export const upperCase = (str) => {
  str = toString(str)

  return str.toUpperCase()
}
