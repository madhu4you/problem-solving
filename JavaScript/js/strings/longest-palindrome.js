longestPalindrome = function (s) {
    //your code here
    // temp variable
    var str = s.toLowerCase();
    var strlength = s.length;
    if (strlength == 1)
        return 1;
    var palindromLength = 0;
    for (var startIdx = 0; startIdx <= strlength; startIdx++) {
        for (var endIdx = 0; endIdx <= strlength; endIdx++) {
            var l = getPalindromLength(str.substring(startIdx, endIdx));
            if (palindromLength < l)
                palindromLength = l;
        }
    }
    return palindromLength;

    console.log(palindromLength);

    //find length
    function getPalindromLength(strIn) {
        var reverseStr = strIn.split("").reverse().join("");
        //console.log("string =>"+strIn);
        //console.log("reverse =>"+reverseStr);
        if (strIn == reverseStr) {
            return strIn.length;
        }
        return 0;
    }
}


/*
Test.assertEquals(longestPalindrome("a"), 1);
Test.assertEquals(longestPalindrome("aa"), 2);
Test.assertEquals(longestPalindrome("baa"), 2);
Test.assertEquals(longestPalindrome("aab"), 2);
Test.assertNotEquals(longestPalindrome("zyabyz"), 6, "Are you sure that is a palindrome?");
Test.assertEquals(longestPalindrome("baabcd"), 4);
Test.assertEquals(longestPalindrome("baablkj12345432133d"), 9);
*/