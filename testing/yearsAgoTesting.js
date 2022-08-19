
describe('Years Ago', () => {
    it("should return 'How many years ago that year is from the current',when year is passed as parameter", () => {
        assert(yearsAgo(2000));
    })
})

assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));

