import toString from 'lang/toString'

export default function contains (str, subString, fromIndex) {
  str = toString(str)
  subString = toString(subString)

  return str.indexOf(subString, fromIndex) !== -1
}
