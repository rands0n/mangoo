import { toString } from '../lang/toString'

export const upperCase = (str) => {
  str = toString(str)

  return str.toUpperCase()
}
