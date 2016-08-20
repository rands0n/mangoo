import toString from 'lang/toString'
import WHITE_SPACES from 'constants/white-spaces'

import ltrim from 'string/ltrim'
import rtrim from 'string/rtrim'

export default function trim (str, chars) {
  str = toString(str)
  chars = chars || WHITE_SPACES

  return ltrim(rtrim(str, chars), chars)
}
