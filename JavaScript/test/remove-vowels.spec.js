describe("Suite for remove vowels from the string", function () {
    var actualValue;
    var expectedValue;
    var output;
    it("output should expect the value Hll Wrld", function () {
        actualValue = "Hello World";
        expectedValue = "Hll Wrld";
        output = removeVowels(actualValue);
        expect(output).toEqual(expectedValue);
    });
    it("output should expect the value Mdh", function () {
        actualValue = "Madhu";
        expectedValue = 'Mdh';
        output = removeVowels(actualValue);
        expect(output).toEqual(expectedValue);
    });
});