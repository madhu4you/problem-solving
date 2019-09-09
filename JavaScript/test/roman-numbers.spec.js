describe("Suite for roman numbers", function () {
    var actualValue;
    var expectedValue;
    var output;
    it("output should expect the value 3", function () {
        actualValue = "III";
        expectedValue = 3;
        output = romanToInt(actualValue);
        expect(output).toEqual(expectedValue);
    });
    it("output should expect the value 4", function () {
        actualValue = "IV";
        expectedValue = 4;
        output = romanToInt(actualValue);
        expect(output).toEqual(expectedValue);
    });
    it("output should expect the value 9", function () {
        actualValue = "IX";
        expectedValue = 9;
        output = romanToInt(actualValue);
        expect(output).toEqual(expectedValue);
    });
    it("output should expect the value 58", function () {
        actualValue = "LVIII";
        expectedValue = 58;
        output = romanToInt(actualValue);
        expect(output).toEqual(expectedValue);
    });
    it("output should expect the value 1994", function () {
        actualValue = "MCMXCIV";
        expectedValue = 1994;
        output = romanToInt(actualValue);
        expect(output).toEqual(expectedValue);
    });
});