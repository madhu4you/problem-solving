describe("Remove the input number from array and return length", function () {
    let inputArray, expectedValue, outputValue;
    it('should return length 6', function () {
        inputArray = [1, 2, 3, 3, 4, 5, 6, 7];
        expectedValue = 6;
        outputValue = removeNumber(inputArray, 3);
        expect(outputValue).toEqual(expectedValue);
    });
    it('should return length 1', function () {
        inputArray = [1];
        expectedValue = 1;
        outputValue = removeNumber(inputArray, 2);
        expect(outputValue).toEqual(expectedValue);
    });
    it('should return length 2', function () {
        inputArray = [3,2,2,3];
        expectedValue = 2;
        outputValue = removeNumber(inputArray, 2);
        expect(outputValue).toEqual(expectedValue);
    });
    it('should return length 5', function () {
        inputArray = [0,1,2,2,3,0,4,2];
        expectedValue = 5;
        outputValue = removeNumber(inputArray, 2);
        expect(outputValue).toEqual(expectedValue);
    });
});