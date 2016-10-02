import { isEmpty } from '../../src/array/isEmpty'

describe('Array', () => {
  describe('#isEmpty', () => {
    context('when passing valid arguments', () => {
      it('should return true to array', () => {
        expect(isEmpty([])).to.be.true
      })

      it('should return true for objects', () => {
        expect(isEmpty({})).to.be.true
      })

      context('when value is undefined, null or void', () => {
        it('should return true for null', () => {
          expect(isEmpty(null)).to.be.true
        })

        it('should return true for void', () => {
          expect(isEmpty(void 0)).to.be.true
        })

        it('should return true for undefined', () => {
          expect(isEmpty(undefined)).to.be.true
        })
      })
    })

    context('when passing invalid arguments', () => {
      it('should return false when the array has values', () => {
        expect(isEmpty([1, 2])).to.be.false
      })
    })
  })
})
