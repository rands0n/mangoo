import toString from 'lang/toString'
import WHITE_SPACES from 'constants/white-spaces'

export default function ltrim (str, chars) {
  str = toString(str)
  chars = chars || WHITE_SPACES

  let i = 0
  let char = str[i]

  while (chars.indexOf(char) > -1) {
    char = str[++i]
  }

  return str.substr(i)
}
