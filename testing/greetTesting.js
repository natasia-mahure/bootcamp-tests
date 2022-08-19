const chai = window.chai
const assert = chai.assert

describe('greet', () => {
    it("should return 'Hello, Paris' when Paris is passed as parameter", () => {
        assert(greet("Paris"));
    })
})


