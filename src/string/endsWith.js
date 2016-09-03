import { toString } from 'lang'

export const endsWith = (str, suffix) => {
  str = toString(str)
  suffix = toString(suffix)

  return str.indexOf(suffix, str.length - suffix.length) !== -1
}
