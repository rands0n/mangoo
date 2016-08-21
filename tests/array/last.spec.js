import last from 'array/last'

describe('Array', () => {
  describe('#last', () => {
    context('when we have inital and final values', () => {
      it('should return the last item of an array', () => {
        const arr = [1, 2, 3, 4, 5, 'lorem']

        expect(last(arr)).to.eql('lorem')
      })

      it('should return the value if is unique', () => {
        expect(last([1])).to.eql(1)
      })
    })

    context('when we dont have values in the final of an array', () => {
      it('should return undefined if values is an empty array', () => {
        expect(last([])).to.eql(undefined)
      })

      it('should return undefined if no value is passed', () => {
        expect(last([])).to.eql(undefined)
      })
    })

    context('when passing a non-sense args', () => {
      it('should treat undefined as undefined', () => {
        expect(last(void 0)).to.eql(undefined)
      })

      it('should treat an empty string as undefined', () => {
        expect(last('')).to.eql(undefined)
      })
    })
  })
})
