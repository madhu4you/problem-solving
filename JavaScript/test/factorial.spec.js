describe("Factorial of a given number", () => {
    var num = 4;
    var output = 24;
    it("Factorial of 4 is equal to 24", () => {
        var result1 = factorial(num);
        var result2 = factorialRecursion(num);
        expect(result1).toEqual(output);
        expect(result2).toEqual(result1);
    });
});