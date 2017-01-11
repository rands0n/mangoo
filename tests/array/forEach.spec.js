import { forEach, contains } from '../../src/array'

describe('Array', () => {
  describe('#forEach', () => {
    let arr

    beforeEach(() => {
      arr = [1, 2, 3, 4, 5]
    })

    context('when iterates item by item', () => {
      context('and the verification is the item', () => {
        it('then the item should be itself', () => {
          let items = []

          const result = forEach(arr, (item) => items.push(item))

          expect(items).to.eql([1, 2, 3, 4, 5])
        })
      })

      context('and the verification is the indexes', () => {
        it('should return the indexes of the array', () => {
          let indexes = []
          const result = forEach(arr, (item, idx, arr) => indexes.push(idx))

          expect(indexes).to.eql([0, 1, 2, 3, 4])
        })
      })

      context('and the verification is the array itself', () => {
        it('should return the array itself 5 times', () => {
          let arr2 = []

          const result = forEach(arr, (item, idx, arr) => arr2.push(arr))

          expect(arr2.length).to.eql(5)
        })
      })
    })

    context('when the value is false', () => {
      beforeEach(() => {
        arr = [1, false, 2, 3]
      })

      it('the iteration must continues', () => {
        let items = []

        const result = forEach(arr, (item) => items.push(item))

        expect(contains(result, false)).to.be.true
      })
    })
  })
})
