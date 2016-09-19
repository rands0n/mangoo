import { head } from 'array'

describe('Array', () => {
  describe('#head', () => {
    context('when we have inital and final values', () => {
      it('should return the head item of an array', () => {
        const arr = [1, 2, 3, 4, 5, 'lorem']

        expect(head(arr)).to.eql(1)
      })

      it('should return the value if is unique', () => {
        expect(head([1])).to.eql(1)
      })
    })

    context('when we dont have values in the final of an array', () => {
      it('should return undefined if values is an empty array', () => {
        expect(head([])).to.eql(undefined)
      })

      it('should return undefined if no value is passed', () => {
        expect(head([])).to.eql(undefined)
      })
    })

    context('when passing a non-sense args', () => {
      it('should treat undefined as undefined', () => {
        expect(head(void 0)).to.eql(undefined)
      })

      it('should treat an empty string as undefined', () => {
        expect(head('')).to.eql(undefined)
      })
    })
  })
})
