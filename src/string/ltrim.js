import toString from 'lang/toString'
import WHITE_SPACES from 'constants/white-spaces'

export default function ltrim (str, chars) {
  str = toString(str)
  chars = chars || WHITE_SPACES

  let start = 0
  let len = str.length
  let charsLen = chars.length
  let found = true
  let i, c

  while (found && start < len) {
    found = false
    i = -1
    c = str.charAt(start)

    while (i++ < charsLen) {
      if (c === chars[i]) {
        found = true
        start++
        break
      }
    }
  }

  return (start >= len) ? '' : str.substr(start, len)
}
