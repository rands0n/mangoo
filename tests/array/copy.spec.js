import { copy } from 'array'

describe('Array', () => {
  describe('#copy', () => {
    context('with an array of integers', () => {
      const arr = [1, 2, 3, 4, 5]

      it('copies the array with the same elements', () => {
        expect(copy(arr)).to.deep.eql(arr)
      })
    })

    context('with an array of strings', () => {
      const arr = ['a', 'b', 'c', 'd', 'e']

      it('copies the array with the same elements', () => {
        expect(copy(arr)).to.deep.eql(arr)
      })
    })

    context('with an empty array', () => {
      const arr = []

      it('does nothing', () => {
        expect(copy(arr)).to.deep.eql(arr)
      })
    })
  })
})
