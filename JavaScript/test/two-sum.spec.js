describe("Suite for two sum", function () {
    var actualArray;
    var expectedArray;
    var target;
    var output;
    beforeEach(function () {
        actualArray = [2, 7, 11, 15], 
        target = 9
        expectedArray = [0, 1];
        output = twoSum(actualArray, target);
    });
    it("find the number to get target value", function () {
      expect(output).toEqual(expectedArray);
    });
  });