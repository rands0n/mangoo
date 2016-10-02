import { isArray } from '../../src/lang/isArray'

describe('Lang', () => {
  describe('#isArray', () => {
    context('when the value passed is an array', () => {
      it('should detect the kind of an array', () => {
        expect(isArray([1, 'foo'])).to.be.true
      })

      context('when passing a constructor', () => {
        it('should detect the kind of an array', () => {
          expect(isArray(new Array(10))).to.be.true
        })
      })
    })

    context('when passing wrong arguments', () => {
      it('should return false for undefined', () => {
        expect(isArray(void 0)).to.be.false
        expect(isArray(undefined)).to.be.false
      })

      it('should return false for empty string', () => {
        expect(isArray('')).to.be.false
      })

      it('should return false for empty object', () => {
        expect(isArray({})).to.be.false
      })

      it('should return false for null', () => {
        expect(isArray(null)).to.be.false
      })
    })
  })
})
