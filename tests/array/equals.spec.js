import { equals } from '../../src/array/equals'

describe('Array', () => {
  describe('#equals', () => {
    describe('when passing valid values to compare', () => {
      it('should return true for valid arrays', () => {
        expect(equals([1, 2], [1, 2])).to.be.true
      })

      it('should return true for strings', () => {
        expect(equals(['1', '2'], ['1', '2'])).to.be.true
      })
    })

    describe('when value are diferents', () => {
      it('should return false', () => {
        expect(equals([1], [])).to.be.false
        expect(equals([], [1])).to.be.false
      })
    })

    describe('when passing wrong arguments', () => {
      describe('when is undefined', () => {
        it('should return false', () => {
          expect(equals(undefined, [1])).to.be.false
        })
      })

      describe('when is void', () => {
        it('should return false', () => {
          expect(equals(void 0)).to.be.false
        })
      })

      describe('when is null', () => {
        it('should return false', () => {
          expect(equals(null)).to.be.false
        })
      })
    })
  })
})
