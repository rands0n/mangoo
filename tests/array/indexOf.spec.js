import { indexOf } from '../../src/array/indexOf'

describe('Array', () => {
  describe('#indexOf', () => {
    context('when we have regular arrays', () => {
      const arr = [1, 'a', 2, 'b']

      it('should return the regular position', () => {
        expect(indexOf(arr, 1)).to.eql(0)
        expect(indexOf(arr, 2)).to.eql(2)
        expect(indexOf(arr, 'b')).to.eql(3)
      })
    })

    context('when we have sparses items in an array', () => {
      const arr = []
      arr[0] = 1
      arr[1] = 'a'
      arr[2] = 2
      arr[3] = 'b'

      it('should iterate on items even if the array is sparse', () => {
        expect(indexOf(arr, 1)).to.eql(0)
        expect(indexOf(arr, 2)).to.eql(2)
        expect(indexOf(arr, 'b')).to.eql(3)
      })

      context('when we want to get some element out of an array', () => {

        it('should return -1', () => {
          expect(indexOf(arr, 'foo')).to.eql(-1)
          expect(indexOf(arr, void 0)).to.eql(-1)
          expect(indexOf(arr, undefined)).to.eql(-1)
        })
      })
    })

    context('when we have fromIndex index to pass', () => {
      const arr = [1, 'a', 2, 'b']

      it('should detect a fromIndex and get based on index', () => {
        expect(indexOf(arr, 2, 2)).to.eql(2)
        expect(indexOf(arr, 'b', 3)).to.eql(3)
      })

      it('should handle fromIndex greater than length', () => {
        expect(indexOf(arr, 1, 20)).to.eql(-1)
        expect(indexOf(arr, 'a', 13)).to.eql(-1)
        expect(indexOf(arr, 2, 10)).to.eql(-1)
        expect(indexOf(arr, 'b', 12)).to.eql(-1)
      })
    })

    context('when we pass wrong arguments', () => {
      it('should handle when arguments is void', () => {
        expect(indexOf(void 0)).to.eql(-1)
      })

      it('should handle when arguments is undefined', () => {
        expect(indexOf(undefined)).to.eql(-1)
      })

      it('should handle when arguments is null', () => {
        expect(indexOf(null)).to.eql(-1)
      })
    })
  })
})
