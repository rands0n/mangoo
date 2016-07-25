import contains from 'string/contains'

describe('String', () => {
  describe('#contains', () => {
    it('should return true if contains substring', () => {
      expect(contains('lorem ipsum', 'lor')).to.eql(true)
    })

    it('should return false when string doesn\'t contains substring', () => {
      expect(contains('lorem ipsum', 'a')).to.eql(false)
    })

    context('when passing a non-sense args', () => {
      it('should return true when passed an empty string', () => {
        expect(contains('', '')).to.eql(true)
      })

      it('should return true when passed a null', () => {
        expect(contains(null, 'a')).to.eql(false)
        expect(contains(null, '')).to.eql(true)
      })

      it('should treat undefined as empty string', () => {
        expect(contains(void 0, '')).to.eql(true)
      })
    })

    context('when string have index', () => {
      it('should start search at given fromIndex', () => {
        expect(contains('lorem ipsum', 'o', 0)).to.eql(true)
        expect(contains('lorem ipsum', 'o', 5)).to.eql(false)
      })

      it('should treat negative fromIndex === 0', () => {
        expect(contains('lorem ipsum', 'o', -1)).to.eql(true)
        expect(contains('lorem ipsum', 'o', -15)).to.eql(true)
      })
    })
  })
})
