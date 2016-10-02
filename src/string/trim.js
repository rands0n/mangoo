import { toString } from '../lang/toString'
import { ltrim, rtrim } from '../string'

import WHITE_SPACES from '../constants/white-spaces'

export const trim = (str, chars) => {
  str = toString(str)
  chars = chars || WHITE_SPACES

  return ltrim(rtrim(str, chars), chars)
}
