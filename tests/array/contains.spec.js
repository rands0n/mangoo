import { contains } from 'array'

describe('Array', () => {
  describe('#contains', () => {
    const arr = [1, 'a', 2, 'b']

    context('when we have existing elements', () => {
      it('should return true for existing elements', () => {
        expect(contains(arr, 'a')).to.be.true
      })
    })

    context('when we dont have existing elements', () => {
      it('should return false for non-existing elements', () => {
        expect(contains(arr, 'c')).to.be.false
      })
    })

    context('when we pass wrong arguments', () => {
      it('should return false when pass void', () => {
        expect(contains(void 0)).to.be.false
      })

      it('should return false when pass undefined', () => {
        expect(contains(undefined)).to.be.false
      })

      context('when try to search element that dont exist', () => {
        it('should return false when element doesnt exist', () => {
          expect(contains([], 'a')).to.be.false
        })
      })
    })
  })
})
