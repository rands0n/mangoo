import { lowerCase } from 'string/lowerCase'

describe('String', () => {
  describe('#lowerCase', () => {
    it('should return lowerCase for all upperCase string', () => {
      expect(lowerCase('FOO')).to.eql('foo')
      expect(lowerCase('BAR')).to.eql('bar')
    })

    it('should treat null as empty string', () => {
      expect(lowerCase(null)).to.eql('')
    })

    it('should treat undefined as empty string', () => {
      expect(lowerCase(void 0)).to.eql('')
    })
  })
})
