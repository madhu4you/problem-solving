/*
Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

describe("Specs for the count the bits in given number", function () {
   var input;
   var output;
   var expectedValue;
    it("Output should expect 1", function () {
        input = 1;
        expectedValue = 1;
        output = countBits(input);
        expect(output).toEqual(expectedValue);
    });
   it("Output should expect 2", function () {
        input = 9;
        expectedValue = 2;
        output = countBits(input);
        expect(output).toEqual(expectedValue);
   });
    it("Output should expect 3", function () {
        input = 7;
        expectedValue = 3;
        output = countBits(input);
        expect(output).toEqual(expectedValue);
    });
});
//Example
//countBits(0) => 0
//countBits(4) => 1
//countBits(7) => 3
//countBits(9) => 2
//countBits(10) => 2