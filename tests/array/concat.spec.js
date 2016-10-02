import { concat } from '../../src/array/concat'

describe('Array', () => {
  describe('#concat', () => {
    context('when passing numbers', () => {
      it('concatenate the array of numbers', () => {
        let arr1 = [1, 2, 3]
        let arr2 = [4, 5, 6]

        expect(concat(arr1, arr2)).to.eql([1, 2, 3, 4, 5, 6])
      })
    })

    context('when we have two lists', () => {
      it('should combine the two lists', () => {
        let arr1 = [1, 2, 3]
        let arr2 = [[4], 5, 6]

        expect(concat(arr1, arr2)).to.eql([1, 2, 3, [4], 5, 6])
      })
    })

    context('when passing wrong arguments', () => {
      it('should return the empty array for undefined', () => {
        expect(concat([1], undefined)).to.eql([1])
      })

      it('should return the empty array for empty array', () => {
        expect(concat([])).to.eql([])
      })

      it('should return the empty array for void', () => {
        expect(concat([1], void 0)).to.eql([1])
      })
    })
  })
})
