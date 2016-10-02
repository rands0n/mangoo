import WHITE_SPACES from '../../src/constants/white-spaces'

describe('Constants', () => {
  describe('WHITE_SPACES', () => {
    it('WHITE_SPACES should be instance of Array', () => {
      expect(WHITE_SPACES).to.be.instanceOf(Array)
    })

    it('WHITE_SPACES should return 25 values', () => {
      expect(WHITE_SPACES).to.eql([
        ' ', '\n', '\r', '\t', '\f', '\v',
        '\u00A0', '\u1680', '\u180E', '\u2000',
        '\u2001', '\u2002', '\u2003', '\u2004',
        '\u2005', '\u2006', '\u2007', '\u2008',
        '\u2009', '\u200A', '\u2028', '\u2029',
        '\u202F', '\u205F', '\u3000'
      ])
    })
  })
})
