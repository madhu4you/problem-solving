// Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count,
// but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of a word
// if there is not an alphabetic letter immediately following it. (Note: Character.isLetter(char) tests if a char is an alphabetic letter.)
function countYZ(str) {
    let count = 0;
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].endsWith("y") || words[i].endsWith("z")) {
            count++;
        }
    }
    return count;
}
console.log(countYZ("fez day")); //  → 2
console.log(countYZ("day fez")); //  → 2
console.log(countYZ("day fyyyz")); //  → 2

// Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive).
// You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".
function withoutString(base, remove) {
    let s = "";
    let i = 0;
    for (; i <= base.length - remove.length;) {
        if (check(base, remove, i)) {
            i += remove.length;
        } else {
            s += base.charAt(i);
            i++;
        }
    }
    if (i < base.length) {
        s += base.substring(i);
    }
    function check(s, k, p) {
        s = s.toLowerCase();
        k = k.toLowerCase();
        let i = 0;
        for (; i < k.length; i++) {
            if (k.charAt(i) !== s.charAt(i + p)) return false;
        }
        return true;
    }
    return s;
}
console.log(withoutString("Hello there", "llo")); //  → "He there"
console.log(withoutString("Hello there", "e")); //  → "Hllo thr"
console.log(withoutString("Hello there", "x")); //  → "Hello there"

// Given a string, return true if the number of appearances of "is" anywhere in the string is
// equal to the number of appearances of "not" anywhere in the string (case sensitive).
function equalIsNot(str) { }
console.log(equalIsNot("This is not")); //  → false
console.log(equalIsNot("This is notnot")); //  → true
console.log(equalIsNot("noisxxnotyynotxisi")); //  → true
// We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right.
// Return true if all the g's in the given string are happy.
function gHappy(str) {
    let count = 0;
    let i = 0;
    for (; i < str.length; i++) {
        if (!isGhappy(str, "g", i)) {
            count++;
        }
    }
    function isGhappy(s, k, i) {
        if (s.charAt(i) == k) {
            let prev = i - 1 >= 0 ? s.charAt(i - 1) == k : false;
            let next = i + 1 < s.length ? s.charAt(i + 1) == k : false;
            return prev ? prev : next;
        }
        return true;
    }
    return count == 0;
}
console.log(gHappy("xxggxx")); //  → true
console.log(gHappy("xxgxx")); //  → false
console.log(gHappy("xxggyygxx")); //  → false
// We'll say that a "triple" in a string is a char appearing three times in a row.
// Return the number of triples in the given string. The triples may overlap.
function countTriple(str) {
    let triple = 3;
    let count = 0;
    for (let i = 0; i <= str.length - triple; i++) {
        if (isTriple(str, str.charAt(i), i, triple)) {
            count++;
        }
    }
    function isTriple(s, k, pos, len) {
        let i = 0;
        for (; i < len; i++) {
            if (s.charAt(i + pos) !== k) {
                return false;
            }
        }
        return true;
    }
    return count;
}
console.log(countTriple("abcXXXabc")); //  → 1
console.log(countTriple("xxxabyyyycd")); //  → 3
console.log(countTriple("a")); //  → 0

// Given a string, return the sum of the digits 0-9 that appear in the string, ignoring all other characters.
// Return 0 if there are no digits in the string. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'.
// Integer.parseInt(string) converts a string to an int.)
function sumDigits(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let s = Number(str.charAt(i));
        if (!isNaN(s)) {
            sum += s;
        }
    }
    return sum;
}
console.log(sumDigits("aa1bc2d3")); //  → 6
console.log(sumDigits("aa11b33")); //  → 8
console.log(sumDigits("Chocolate")); //  → 0

// Given a string, return the longest substring that appears at both the beginning and end of the string without overlapping.
// For example, sameEnds("abXab") is "ab".
function sameEnds(string) { 
    
}
console.log(sameEnds("abXYab")); //  → "ab"
console.log(sameEnds("xx")); //  → "x"
console.log(sameEnds("xxx")); //  → "x"
// Given a string, look for a mirror image (backwards) string at both the beginning and end of the given string.
// In other words, zero or more characters at the very begining of the given string,
// and at the very end of the string in reverse order (possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".
function mirrorEnds(string) { }
console.log(mirrorEnds("abXYZba")); //  → "ab"
console.log(mirrorEnds("abca")); //  → "a"
console.log(mirrorEnds("aba")); //  → "aba"

// Given a string, return the length of the largest "block" in the string. A block is a run of adjacent chars that are the same.
function maxBlock(str) { }
console.log(maxBlock("hoopla")); //  → 2
console.log(maxBlock("abbCCCddBBBxx")); //  → 3
console.log(maxBlock("")); //  → 0
// Given a string, return the sum of the numbers appearing in the string, ignoring all other characters.
// A number is a series of 1 or more digit chars in a row. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'.
// Integer.parseInt(string) converts a string to an int.)
function sumNumbers(str) { 
    
}
console.log(sumNumbers("abc123xyz")); //  → 123
console.log(sumNumbers("aa11b33")); //  → 44
console.log(sumNumbers("7 11")); //  → 18
// Given a string, return a string where every appearance of the lowercase word "is" has been replaced with "is not".
// The word "is" should not be immediately preceeded or followed by a letter -- so for example the "is" in "this" does not count.
// (Note: Character.isLetter(char) tests if a char is a letter.)
function notReplace(str) { }
console.log(notReplace("is test")); //  → "is not test"
console.log(notReplace("is-is")); //  → "is not-is not"
console.log(notReplace("This is right")); //  → "This is not right"
