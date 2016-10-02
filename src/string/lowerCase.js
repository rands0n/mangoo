import { toString } from '../lang/toString'

export const lowerCase = (str) => {
  str = toString(str)

  return str.toLowerCase()
}
