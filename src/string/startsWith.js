import { toString } from 'lang'

export const startsWith = (str, prefix) => {
  str = toString(str)
  prefix = toString(prefix)

  return str.indexOf(prefix) === 0
}
