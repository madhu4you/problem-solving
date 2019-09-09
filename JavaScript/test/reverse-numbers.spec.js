describe("Spec for reverse the numbers", function() {
    var input, output, expectedValue;
    it("Output should get the value as input when it is single digit", function() {
        input = 3;
        expectedValue = 3;
        output = reverseNumber(3);
        expect(output).toEqual(expectedValue);
    });
    it("Output should be 21 when input is 12", function () {
       input = 12;
       expectedValue = 21;
       output = reverseNumber(input);
       expect(output).toEqual(expectedValue);
    });
    it("Output should be 1234567890 when input is 0987654321", function () {
        input = 123456789;
        expectedValue = 987654321;
        output = reverseNumber(input);
        expect(output).toEqual(expectedValue);
    });
});