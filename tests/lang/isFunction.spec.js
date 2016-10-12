import { isFunction } from '../../src/lang/isFunction'

describe('Lang', () => {
  describe('#isFunction', () => {
    describe('when argument passed is a function', () => {
      it('should return true for function passed', () => {
        expect(isFunction(function () {})).to.be.true
      })

      describe('when passing an arrow function', () => {
        it('should return true for an arrow function', () => {
          expect(isFunction(() => true)).to.be.true
        })
      })
    })

    describe('when passing numbers to arguments', () => {
      it('should return false', () => {
        expect(isFunction(123)).to.be.false
      })
    })

    describe('when passing array to arguments', () => {
      it('should return false', () => {
        expect(isFunction([])).to.be.false
      })
    })

    describe('when passing objects to arguments', () => {
      it('should return false', () => {
        expect(isFunction({})).to.be.false
      })
    })

    describe('when passing wrong arguments', () => {
      it('should return false for undefined', () => {
        expect(isFunction(undefined)).to.be.false
      })

      it('should return false for void', () => {
        expect(isFunction(void 0)).to.be.false
      })

      it('should return false for null', () => {
        expect(isFunction(null)).to.be.false
      })
    })
  })
})
