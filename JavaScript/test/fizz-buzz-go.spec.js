describe("Suite for fizzbuzz go", function f() {
    var actualValue;
    var expectedValue;
    var output;
    it("Output should expect '1'", function () {
        actualValue = 1;
        expectedValue = '1';
        output = fizzBuzzGo(actualValue);
        expect(output).toEqual(expectedValue);
    });
    it("Output should except '2'", function () {
       actualValue = 2;
       expectedValue = '2';
       output = fizzBuzzGo(actualValue);
       expect(output).toEqual(expectedValue);
    });
    it("Output should except 'fizz'", function () {
       actualValue = 3;
       expectedValue = 'fizz';
       output = fizzBuzzGo(actualValue);
       expect(output).toEqual(expectedValue);
    });
    it("Output should except 'buzz'", function () {
        actualValue = 5;
        expectedValue = 'buzz';
        output = fizzBuzzGo(actualValue);
        expect(output).toEqual(expectedValue);
    });
    it("Output should except 'fizzbuzz'", function () {
        actualValue = 15;
        expectedValue = 'fizzbuzz';
        output = fizzBuzzGo(actualValue);
        expect(output).toEqual(expectedValue);
    });
    it("Output should except -1", function () {
        actualValue = 'fizz';
        expectedValue = -1;
        output = fizzBuzzGo(actualValue);
        expect(output).toEqual(expectedValue);
    });
});