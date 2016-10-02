import { rtrim } from '../../src/string/rtrim'

describe('String', () => {
  describe('#rtrim', () => {
    context('when we dont have some chars to remove', () => {
      it('should remove white spaces from right', () => {
        expect(rtrim('-- rands  ')).to.eql('-- rands')
      })
    })

    context('when we have some chars to remove', () => {
      it('should remove another chars from right', () => {
        const chars = ['+', ' ']

        expect(rtrim('-- rands  +', chars)).to.eql('-- rands')
      })
    })

    context('when we dont have values to pass', () => {
      it('should treat null as empty string', () => {
        expect(rtrim(null)).to.eql('')
      })

      it('should treat undefined as empty string', () => {
        expect(rtrim(void 0)).to.eql('')
      })
    })
  })
})
