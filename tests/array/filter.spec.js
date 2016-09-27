import { filter } from 'array'

describe('Array', () => {
  describe('#filter', () => {
    context('when passing numbers', () => {
      it('reduces an array to those matching a filter', () => {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        let result = filter((item) => item % 2 === 0, arr)

        expect(result).to.eql([2, 4, 6, 8, 10])
      })

      it('reduces an array to those numbers are greater than 100', () => {
        let arr = [1, 100, 200, 300, 201]
        let result = filter((i) => i >= 100, arr)

        expect(result).to.eql([100, 200, 300, 201])
      })

      context('when passing negative numbers', () => {
        it('reduces an array to those numbers are negative', () => {
          let arr = [-1, -100, -200, 0, 300]
          let result = filter((i) => i < 0, arr)

          expect(result).to.eql([-1, -100, -200])
        })
      })
    })

    context('when passing wrong arguments', () => {
      it('reduces to an empty array if its empty', () => {
        let arr = []
        let result = filter((i) => i > 0, arr)

        expect(result).to.eql([])
      })

      it('reduces to an empty array if value is undefined', () => {
        let result = filter((i) => i > 0, undefined)

        expect(result).to.eql([])
      })

      it('reduces to an empty array if value is void', () => {
        let result = filter((i) => i > 0, void 0)

        expect(result).to.eql([])
      })
    })
  })
})
