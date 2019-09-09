describe("Find all numbers between these two numbers such that difference between adjacent digit is 1", function () {
    it("Input `m=1` & `n=1` and return is 1", function () {
        let m = 1;
        let n = 1;
        let output = findNum(m, n);
        expect(output).toEqual('1 ');
    });
    it("Input `m = 0` & `n = 1` and return is `0`", function () {
        let m = 0;
        let n = 1;
        let output = findNum(m, n);
        expect(output).toEqual('0 1 ');
    });
    it("Input `m = 20` & `n = 22` and return is `21`", function () {
        let m = 20;
        let n = 22;
        let output = findNum(m, n);
        expect(output).toEqual('21 ');
    });

    it("Input `m = 0` & `n = 22` and return is `0 1 2 3 4 5 6 7 8 9 10 12 21 `", function () {
        let m = 0;
        let n = 22;
        let output = findNum(m, n);
        expect(output).toEqual('0 1 2 3 4 5 6 7 8 9 10 12 21 ');
    });
});