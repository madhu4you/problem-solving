describe("Sort the given array by using selection sort", function () {
    var input;
    var output;
    var expectedValue;
    it("Output should expect sorted array", function () {
        input = [3, 2, 1, 4, 6, 5];
        expectedValue = [1, 2, 3, 4, 5, 6];
        output = bubbleSort(input);
        expect(output).toEqual(expectedValue);
    });

    it("Output should expect sorted array", function () {
        input = [3, 2, 1, 4, 6, 5];
        expectedValue = [1, 2, 3, 4, 5, 6];
        output = bubbleSortArray(input);
        expect(output).toEqual(expectedValue);
    });
});