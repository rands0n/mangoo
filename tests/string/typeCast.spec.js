import { typeCast } from 'string'

describe('String', () => {
  describe('#typeCast', () => {
    it('should return native when passing true string', () => {
      expect(typeCast('true')).to.be.true
    })

    it('should return native false when passing false string`', () => {
      expect(typeCast('false')).to.be.false
    })

    it('should return native null when passing a null string', () => {
      expect(typeCast('null')).to.be.null
      expect(typeCast(null)).to.be.null
    })

    it('should return native undefined when passing undefined string', () => {
      expect(typeCast('undefined')).to.be.undefined
    })

    it('should return undefined when pass nothing', () => {
      expect(typeCast()).to.be.undefined
    })

    it('should return native int when passing int value', () => {
      expect(typeCast('123')).to.eql(123)
    })

    it('should return native float when passing float value', () => {
      expect(typeCast('12.3')).to.eql(12.3)
    })

    it('should return native string when passing string value', () => {
      expect(typeCast('foo')).to.eql('foo')
    })
  })
})
