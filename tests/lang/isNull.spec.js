import { isNull } from 'lang'

describe('Lang', () => {
  describe('#isNull', () => {
    it('should detect is null is null', () => {
      expect(isNull(null)).to.eql(true)
    })

    it('should detect if number is null', () => {
      expect(isNull(1)).to.eql(false)
      expect(isNull(10)).to.eql(false)
    })

    it('should detect if string is null', () => {
      expect(isNull('string')).to.eql(false)
    })

    it('should detect if Array is null', () => {
      expect(isNull([])).to.eql(false)
    })

    it('should detect if Object is null', () => {
      expect(isNull({})).to.eql(false)
    })
  })
})
