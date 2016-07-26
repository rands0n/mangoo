const UNDEF = undefined

export default function typeCast (val) {
  let value

  if (val === 'null' || val === null) {
    value = null
  } else if (val === 'true') {
    value = true
  } else if (val === 'false') {
    value = false
  } else if (val === UNDEF || val === 'undefined') {
    value = undefined
  } else if (val === '' || isNaN(val)) {
    value = val // isNaN('') returns false
  } else {
    value = parseFloat(val) // parseFloat(null || '') returns false
  }

  return value
}
