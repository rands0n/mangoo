import { trim } from '../../src/string/trim'

describe('String', () => {
  describe('#trim', () => {
    context('when we have white spaces in begin and end of a string', () => {
      it('should remove white spaces from begin and end', () => {
        expect(trim('    lorem ipsum   ')).to.eql('lorem ipsum')
      })
    })

    context('when we have another chars to begin and end', () => {
      it('should remove custom chars from begin and end of a string', () => {
        const chars = ['-', '+', '*']
        const str = '-+-*lorem ipsum*-+-'

        expect(trim(str, chars)).to.eql('lorem ipsum')
      })
    })

    context('when we have weird chars to remove', () => {
      it('should treat null as empty string', () => {
        expect(trim(null)).to.eql('')
      })

      it('should treat undefined as empty string', () => {
        expect(trim(void 0)).to.eql('')
      })
    })
  })
})
