describe("Suite for test the high and low numnbers", function () {
    var actualValue;
    var expectedValue;
    var output;
    it("output should expect the value '5 1'", function () {
        actualValue = "1 2 3 4 5";
        expectedValue = "5 1";
        output = highAndLow(actualValue);
        expect(output).toEqual(expectedValue);
    });
    it("output should expect the value '5 -3'", function () {
        actualValue = "1 2 -3 4 5";
        expectedValue = "5 -3";
        output = highAndLow(actualValue);
        expect(output).toEqual(expectedValue);
    });
    it("output should expect the value '9 -5'", function () {
        actualValue = "1 9 3 4 -5";
        expectedValue = "9 -5";
        output = highAndLow(actualValue);
        expect(output).toEqual(expectedValue);
    });
    it("output should expect the value '542 -214'", function () {
        actualValue = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";
        expectedValue = "542 -214";
        output = highAndLow(actualValue);
        expect(output).toEqual(expectedValue);
    });
    it("output should expect the value '5 -3'", function () {
        actualValue = "1 2 -3 4 5";
        expectedValue = "5 -3";
        output = highAndLowOptimize(actualValue);
        expect(output).toEqual(expectedValue);
    });
    it("output should expect the value '9 -5'", function () {
        actualValue = "1 9 3 4 -5";
        expectedValue = "9 -5";
        output = highAndLowOptimize(actualValue);
        expect(output).toEqual(expectedValue);
    });
});