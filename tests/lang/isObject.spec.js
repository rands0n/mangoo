import { isObject } from '../../src/lang/isObject'

describe('Lang', () => {
  describe('#isObject', () => {
    context('when passing an object', () => {
      it('assert true if argument is an object', () => {
        expect(isObject({})).to.be.true
      })

      it('assert false when passing an array', () => {
        expect(isObject([])).to.be.false
      })
    })

    context('when passing wrong values', () => {
      it('assert false when passing a undefined value', () => {
        expect(isObject(undefined)).to.be.false
      })

      it('assert false when passing a empty string', () => {
        expect(isObject('')).to.be.false
      })

      it('assert false when passing a void arg', () => {
        expect(isObject(void 0)).to.be.false
      })

      it('assert false when passing a number', () => {
        expect(isObject(123)).to.be.false
      })

      it('assert false when passing a null', () => {
        expect(isObject(null)).to.be.false
      })
    })
  })
})
