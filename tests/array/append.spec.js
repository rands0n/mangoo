import { append } from '../../src/array/append'

describe('Array', () => {
  describe('#append', () => {
    context('when we have the correct two arrays', () => {
      it('should append a second array to first', () => {
        let arr = [1, 2]
        let arr2 = [3, 4]

        expect(append(arr, arr2)).to.eql([1, 2, 3, 4])
      })

      it('should be the same type both of the args', () => {
        let arr = [1, 2]
        let arr2 = [3, 4]

        let result = append(arr, arr2)

        expect(arr).to.be.a('Array')
        expect(result).to.be.a('Array')
      })
    })

    context('passing a wrong arguments', () => {
      it('should accept null as second argument', () => {
        expect(append([1, 2], null)).to.eql([1, 2])
      })

      it('should accept undefined as second argument', () => {
        expect(append([1, 2], undefined)).to.eql([1, 2])
      })
    })
  })
})
