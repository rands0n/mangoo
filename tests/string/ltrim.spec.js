import { ltrim } from 'string'

describe('String', () => {
  describe('#ltrim', () => {
    it('should remove whitespaces from begin of string', () => {
      expect(ltrim('\t\n rands \t\t')).to.eql('rands \t\t')
    })

    it('should remove required chars from begin of a string', () => {
      const chars = ['-', '/', '&']

      expect(ltrim('-&/-rands*ˆ%', chars)).to.eql('rands*ˆ%')
    })

    it('should treat null as empty string', () => {
      expect(ltrim(null)).to.eql('')
    })

    it('should treat undefined as empty string', () => {
      expect(ltrim(void 0)).to.eql('')
    })
  })
})
