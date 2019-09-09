describe("Specs for find the longest palindrome", function () {
   var input;
   var output;
   var expectedOutput;
   it("Output should return 1", function () {
      input = "a";
      expectedOutput = 1;
      output = longestPalindrome(input);
      expect(output).toEqual(expectedOutput);
   });
    it("Output should return 2", function () {
        input = "aab";
        expectedOutput = 2;
        output = longestPalindrome(input);
        expect(output).toEqual(expectedOutput);
    });
    it("Output should return 2", function () {
        input = "aab";
        expectedOutput = 2;
        output = longestPalindrome(input);
        expect(output).toEqual(expectedOutput);
    });
    it("Output should return 1", function () {
        input = "zyabyz";
        expectedOutput = 1;
        output = longestPalindrome(input);
        expect(output).toEqual(expectedOutput);
    });
    it("Output should return 9", function () {
        input = "baablkj12345432133d";
        expectedOutput = 9;
        output = longestPalindrome(input);
        expect(output).toEqual(expectedOutput);
    });
});
/*
Test.assertEquals(longestPalindrome("a"), 1);
Test.assertEquals(longestPalindrome("aa"), 2);
Test.assertEquals(longestPalindrome("baa"), 2);
Test.assertEquals(longestPalindrome("aab"), 2);
Test.assertNotEquals(longestPalindrome("zyabyz"), 6, "Are you sure that is a palindrome?");
Test.assertEquals(longestPalindrome("baabcd"), 4);
Test.assertEquals(longestPalindrome("baablkj12345432133d"), 9);
*/