import { toString } from 'lang'
import WHITE_SPACES from 'constants/white-spaces'

export const rtrim = (str, chars) => {
  str = toString(str)
  chars = chars || WHITE_SPACES

  let i = str.length - 1
  let char = str[str.length - 1]

  while (chars.indexOf(char) > -1) {
    char = str[--i]
  }

  return str.substr(0, i + 1)
}
