import { uniq } from '../../src/array/uniq'

describe('Array', () => {
  describe('#uniq', () => {
    describe('when passing duplicate values', () => {
      it('should remove the duplicate', () => {
        let arr = [1, 1, 2, 'a', 'a']

        expect(uniq(arr)).to.eql([1, 2, 'a'])
      })

      it('should not touch on original array', () => {
        let arr = [1, 1, 2, 'a', 'a']
        let result = uniq(arr)

        expect(arr.length).to.eql(5)
      })
    })

    describe('when the source array is wrong', () => {
      describe('when the source array is undefined', () => {
        it('should return a empty array for undefined', () => {
          expect(uniq(undefined)).to.eql([])
        })
      })

      describe('when the source array is null', () => {
        it('should return a empty array for null', () => {
          expect(uniq(null)).to.eql([])
        })
      })
    })
  })
})
