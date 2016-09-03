import { isNaN } from 'number'

describe('Number', () => {
  describe('#isNaN', () => {
    it('should return true when the argument is a NaN', () => {
      expect(isNaN(NaN)).to.eql(true)
      expect(isNaN(0 / 0)).to.eql(true)
    })

    it('should return false when the argument is an object', () => {
      expect(isNaN({})).to.eql(false)
    })

    it('should return false when the argument is an array', () => {
      expect(isNaN([])).to.eql(false)
      expect(isNaN([1, 2])).to.eql(false)
    })

    it('should return true when the argument is null', () => {
      expect(isNaN(null)).to.eql(false)
    })

    it('should return false when the argument a string', () => {
      expect(isNaN('35')).to.eql(false)
      expect(isNaN('35.2')).to.eql(false)
      expect(isNaN('35ABC')).to.eql(false)
    })


    it('should return false when passing a number', () => {
      expect(isNaN(2)).to.eql(false)
    })

    context('when passing a date', () => {
      it('should return false when passing a date constructor', () => {
        expect(isNaN(new Date())).to.eql(false)
      })

      it('should return true when passing a string date', () => {
        expect(isNaN(new Date().toString())).to.eql(false)
      })
    })

    context('when passing the number constructor', () => {
      it('should be false when passing a number constructor', () => {
        expect(isNaN(new Number(123))).to.eql(false)
      })

      it('should be false when passing a number with NaN', () => {
        expect(isNaN(new Number(NaN))).to.eql(false)
      })
    })
  })
})
