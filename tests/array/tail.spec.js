import { tail } from 'array'

describe('Array', () => {
  describe('#tail', () => {
    context('when passing a valid arguments', () => {
      it('should return the array without the first element', () => {
        expect(tail([1, 2, 3, 4, 5])).to.eql([2, 3, 4, 5])
      })

      it('should return the empty array of array', () => {
        expect(tail([])).to.eql([])
      })

      context('when passing string values', () => {
        it('should return the array of string without the first element', () => {
          expect(tail(['1', '2', '3'])).to.eql(['2', '3'])
        })
      })
    })

    context('when passing invalid arguments', () => {
      it('should return the array of undefined', () => {
        expect(tail(undefined)).to.eql([])
      })

      it('should return the array of void', () => {
        expect(tail(void 0)).to.eql([])
      })

      it('should return the array of null', () => {
        expect(tail(null)).to.eql([])
      })
    })
  })
})
