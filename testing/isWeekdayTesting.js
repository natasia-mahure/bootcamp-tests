
describe('isWeekday', () =>{
    it("should return 'true/false, Weekday' if the parameter passed in is a day of the week it returns true,", () => {
        assert(isWeekday("friday"));
    })
})


// assert.equal(isWeekday('Saturday'), false);
// assert.equal(isWeekday('Sunday'), false);
// assert.equal(isWeekday('Monday'), true);
// assert.equal(isWeekday('Tuesday'), true);
// assert.equal(isWeekday('Wednesday'), true);
// assert.equal(isWeekday('Thursday'), true);
// assert.equal(isWeekday('Friday'), true);