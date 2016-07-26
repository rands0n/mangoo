import toString from 'lang/toString'

export default function startsWith (str, prefix) {
  str = toString(str)
  prefix = toString(prefix)

  return str.indexOf(prefix) === 0
}
