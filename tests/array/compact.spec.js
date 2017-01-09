import { compact } from '../../src/array/compact'

describe('Array', () => {
  describe('#compact', () => {
    let numbers

    beforeEach(() => {
      numbers = [1, void 0, undefined, 4, 5]
    })

    context('when the array has undefined values', () => {
      it('then the compact should remove theses values', () => {
        expect(compact(numbers)).to.eql([1, 4, 5])
      })
    })

    context('when checking type of results', () => {
      it('then the results should be an array', () => {
        expect(compact(numbers)).to.be.instanceof(Array)
      })
    })

    context('when passing wrong values to compact', () => {
      context('and the argument is an empty array', () => {
        it('then it should return empty array', () => {
          expect(compact([])).to.eql([])
        })
      })

      context('and the argument is a undefined value', () => {
        it('then the compact should return a empty array', () => {
          expect(compact(undefined)).to.eql([])
        })
      })

      context('and the argument is a void value', () => {
        it('then the compact should return a empty array', () => {
          expect(compact(void 0)).to.eql([])
        })
      })

      context('and the argument is a null value', () => {
        it('then the compact should return a empty array', () => {
          expect(compact(null)).to.eql([])
        })
      })
    })
  })
})
