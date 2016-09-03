import { upperCase } from 'string'

describe('String', () => {
  describe('#upperCase', () => {
    it('should not convert string to lower case', () => {
      expect(upperCase('FOO')).to.equal('FOO')
      expect(upperCase('Bar')).to.equal('BAR')
      expect(upperCase('ipsum')).to.equal('IPSUM')
    })

    it('should treat null as empty string', () => {
      expect(upperCase(null)).to.eql('')
    })

    it('should treat undefined as empty string', () => {
      expect(upperCase(void 0)).to.eql('')
    })
  })
})
