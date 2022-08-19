describe('Total Phone Bill', () => {
    it("should return 'The total Phone bill when call, sms, call, sms, sms is passed in as a parameter", () => {
        assert(totalPhoneBill("'call, sms, call, sms, sms"));
    })
})

assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
assert.equal('R3.40', totalPhoneBill('call, sms'));
assert.equal('R1.30', totalPhoneBill('sms, sms'));