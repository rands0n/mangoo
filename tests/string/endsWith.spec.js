import { endsWith } from '../../src/string/endsWith'

describe('String', () => {
  describe('#endsWith', () => {
    it('should return true if string ends with suffix', () => {
      expect(endsWith('lorem ipsum', 'ipsum')).to.be.true
    })

    it('should return false if string dont ends with suffix', () => {
      expect(endsWith('ipsum-lorem', 'ipsum')).to.be.false
    })

    context('when passing non-sense args', () => {
      it('should return false if passing a null', () => {
        expect(endsWith(void 0, 'lorem')).to.be.false
        expect(endsWith('lorem', void 0)).to.be.true
      })

      it('should return true if suffix is undefined', () => {
        expect(endsWith('lorem', void 0)).to.be.true
      })

      it('should return true if suffix is null', () => {
        expect(endsWith('lorem', null)).to.be.true
      })
    })
  })
})
