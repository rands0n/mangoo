import { curry } from '../../src/function/curry'

describe('Function', () => {
  describe('#curry', () => {
    let add

    beforeEach(() => {
      add = (a, b) => a + b
    })

    context('when passing arguments to sum', () => {
      it('should sum the values passing normally', () => {
        expect(curry(add, 1, 2)).to.equal(3)
      })
    })

    context('when missing the first argument', () => {
      it('should return a new function binded by curry', () => {
        expect(curry(add, 1)).to.be.a('Function')
      })
    })

    context('when passing just a function', () => {
      it('should return a new Function', () => {
        expect(curry(add)).to.be.a('Function')
      })
    })

    context('when passing other arguments after', () => {
      it('should sum the value acording', () => {
        expect(curry(add)(1)(2)).to.equal(3)
      })
    })
  })
})
