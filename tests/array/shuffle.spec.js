import { shuffle } from 'array'

describe('Array', () => {
  describe('#shuffle', () => {
    context('with an array of integers', () => {
      const arr = [1, 2, 3, 4, 5]

      it('shuffles the array', () => {
        expect(shuffle(arr)).to.not.eql(arr)
      })

      it('should contain the same elements after the array is shuffled', () => {
        expect(shuffle(arr)).to.have.members(arr)
      })
    })

    context('with an array of strings', () => {
      const arr = ['a', 'b', 'c', 'd', 'e']

      it('shuffles the array', () => {
        expect(shuffle(arr)).to.not.eql(arr)
      })

      it('should contain the same elements after the array is shuffled', () => {
        expect(shuffle(arr)).to.have.members(arr)
      })
    })

    context('with an empty array', () => {
      const arr = []

      it('does nothing', () => {
        expect(shuffle(arr)).to.eql(arr)
      })
    })
  })
})
