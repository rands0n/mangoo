import startsWith from 'string/startsWith'

describe('String', () => {
  describe('#startsWith', () => {
    it('should return true if match to prefix', () => {
      expect(startsWith('lorem ipsum', 'lorem')).to.be.true
    })

    it('should return false if dont match to prefix', () => {
      expect(startsWith('lorem ipsum', 'ipsum')).to.be.false
    })

    context('when passing a non-sense args', () => {
      it('should return empty string when passing a non-sense prefix', () => {
        expect(startsWith('lorem', void 0)).to.be.true
        expect(startsWith(void 0, 'lorem')).to.be.false
      })

      it('should return false when passing a undefined', () => {
        expect(startsWith(void 0, 'lorem')).to.be.false
      })

      it('should return true when passing a undefined prefix', () => {
        expect(startsWith('lorem', void 0)).to.be.true
      })
    })
  })
})
