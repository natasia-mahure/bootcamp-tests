
describe('CountAllPaarl', () => {
    it("should return 'The number of all registration numbers from Paarl' when countAllPaarl is passed as parameter", () => {
        assert(countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"));
    })
})





assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));