import toString from 'lang/toString'

describe('Lang', () => {
  describe('#toString', () => {
    it('should convert null to empty string', () => {
      expect(toString(null)).to.equal('')
    })

    it('should convert undefined to empty string', () => {
      expect(toString(void 0)).to.eql('')
    })

    it('should return string unchained', () => {
      expect(toString('')).to.eql('')
      expect(toString('test')).to.eql('test')
    })

    it('should return number as string', () => {
      expect(toString(0)).to.eql('0')
      expect(toString(50)).to.eql('50')
    })

    it('should return boolean as string', () => {
      expect(toString(true)).to.eql('true')
      expect(toString(false)).to.eql('false')
    })
  })
})
