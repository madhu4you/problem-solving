// Given a string, return a string where for every char in the original, there are two chars.
function doubleChar(str) {
  const newS = str.split("").reduce((acc, s) => {
    return (acc += s + s);
  }, "");
  return newS;
}
console.log(doubleChar("The")); // → "TThhee"
console.log(doubleChar("AAbb")); // → "AAAAbbbb"
console.log(doubleChar("Hi-There")); // → "HHii--TThheerree"

// Return the number of times that the string "hi" appears anywhere in the given string.
function countHi(str) {
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    let sub = str.substr(i, 2);
    if (sub === "hi") count++;
  }
  return count;
}
console.log(countHi("abc hi ho")); // → 1
console.log(countHi("ABChi hi")); // → 2
console.log(countHi("hihi")); // → 2

// Return true if the string "cat" and "dog" appear the same number of times in the given string.
function catDog(str) {
  let count = 0;
  for (let i = 0; i <= str.length - 3; i++) {
    if (
      str.charAt(i) === "c" &&
      str.charAt(i + 1) === "a" &&
      str.charAt(i + 2) === "t"
    ) {
      count++;
    }
    if (
      str.charAt(i) === "d" &&
      str.charAt(i + 1) === "o" &&
      str.charAt(i + 2) === "g"
    ) {
      count--;
    }
  }
  return count === 0;
}
console.log(catDog("catdog")); // → true
console.log(catDog("catcat")); // → false
console.log(catDog("1cat1cadodog")); // → true

// Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.
function countCode(str) {
  let count = 0;
  for (let i = 0; i <= str.length - 4; i++) {
    if (
      str.charAt(i) === "c" &&
      str.charAt(i + 1) === "o" &&
      str.charAt(i + 3) === "e"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countCode("aaacodebbb")); // → 1
console.log(countCode("codexxcode")); // → 2
console.log(countCode("cozexxcope")); // → 2

// Given two strings, return true if either of the strings appears at the very end of the other string,
//ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.
function endOther(a, b) {
  return (
    a.toLowerCase().endsWith(b.toLowerCase()) || b.toLowerCase().endsWith(a.toLowerCase())
  );
}
console.log(endOther("Hiabc", "abc")); // → true
console.log(endOther("AbC", "HiaBc")); // → true
console.log(endOther("abc", "abXabc")); // → true

// Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.
function xyzThere(str) {
  for (let i = 0; i <= str.length - 3; i++) {
    if (
      str.charAt(i) == "x" &&
      str.charAt(i + 1) == "y" &&
      str.charAt(i + 2) == "z"
    ) {
      if (str.charAt(i - 1) != ".") {
        return true;
      }
    }
  }
  return false;
}
console.log(xyzThere("abcxyz")); // → true
console.log(xyzThere("abc.xyz")); // → false
console.log(xyzThere("xyz.abc")); // → true
console.log(xyzThere(".xyz.abcx")); // → false

// Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.
function bobThere(str) {
  for (let i = 0; i <= str.length - 3; i++) {
    if (str.charAt(i) == "b" && str.charAt(i + 2) == "b") {
      return true;
    }
  }
  return false;
}
console.log(bobThere("abcbob")); // → true
console.log(bobThere("b9b")); // → true
console.log(bobThere("bac")); // → false

// We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string.
//So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.
function xyBalance(str) {
  for (let i = str.length -1 ; i >= 0; i--) {
    let s = str.charAt(i);
    if(s != 'x' || s != 'y')
        continue;
    return s === 'y'; 
  }
  return true;
}
console.log(xyBalance("aaxbby")); // → true
console.log(xyBalance("aaxbb")); // → false
console.log(xyBalance("yaaxbb")); // → false
// Given two strings, A and B, create a bigger string made of the first char of A, the first char of B, the second char of A, the second char of B, and so on.
//Any leftover chars go at the end of the result.
function mixString(a, b) {
  let small = a;
  let big = b;
  if (a.length > b.length) {
    big = a;
    small = b;
  }
  let output = "";
  let i = 0;
  for (; i < small.length; i++) {
    output += a.charAt(i) + b.charAt(i);
  }
  if (big.length > small.length) {
    output += big.substring(i);
  }
  return output;
}

console.log(mixString("abc", "xyz")); // → "axbycz"
console.log(mixString("Hi", "There")); // → "HTihere"
console.log(mixString("xxxx", "There")); // → "xTxhxexre"

// Given a string and an int N, return a string made of N repetitions of the last N characters of the string.
// You may assume that N is between 0 and the length of the string, inclusive.
function repeatEnd(str, n) {
  let sub = str.substring(str.length - n);
  return new Array(n).fill(sub).join("");
}
console.log(repeatEnd("Hello", 3)); // → "llollollo"
console.log(repeatEnd("Hello", 2)); // → "lolo"
console.log(repeatEnd("Hello", 1)); // → "o"

// Given a string and an int n, return a string made of the first n characters of the string, followed by the first n-1 characters of the string, and so on.
// You may assume that n is between 0 and the length of the string, inclusive (i.e. n >= 0 and n <= str.length()).
function repeatFront(str, n) {
  if (n < 0 && n > str.length) return str;
  let fNchar = str.substr(0, n);
  let output = "";
  for (let i = 0; i < n; i++) {
    output += fNchar.substr(0, fNchar.length - i);
  }
  return output;
}
console.log(repeatFront("Chocolate", 4)); // → "ChocChoChC"
console.log(repeatFront("Chocolate", 3)); // → "ChoChC"
console.log(repeatFront("Ice Cream", 2)); // → "IcI"

//Given two strings, word and a separator, return a big string made of count occurences of the word, separated by the separator string.
function repeatSeparator(word, sep, count) {
  let output = "";
  for (let i = 0; i < count; i++) {
    output += word;
    if (i < count - 1) {
      output += sep;
    }
  }
  return output;
}
console.log(repeatSeparator("Word", "X", 3)); // → "WordXWordXWord"
console.log(repeatSeparator("This", "And", 2)); // → "ThisAndThis"
console.log(repeatSeparator("This", "And", 1)); // → "This"

// Given a string, consider the prefix string made of the first N chars of the string.
// Does that prefix string appear somewhere else in the string? Assume that the string is not empty and that N is in the range 1..str.length().
function prefixAgain(str, n) {
  if (n < 0 || n > str.length) return false;
  let sub = str.substr(0, n);
  return str.indexOf(sub, 1) != -1;
}
console.log(prefixAgain("abXYabc", 1)); // → true
console.log(prefixAgain("abXYabc", 2)); // → true
console.log(prefixAgain("abXYabc", 3)); // → false

// Given a string, does "xyz" appear in the middle of the string? To define middle, we'll say that the number of chars to the left and right of the "xyz" must differ by at most one.
// This problem is harder than it looks.
function xyzMiddle(str) {
  let len = str.length;
  if (str.indexOf("xyz") == -1 && len < 3) return false;
  let mid = parseInt(len / 2);
  if (len % 2 == 0) {
    if (str.charAt(mid) == "y") {
      return str.charAt(mid - 1) == "x" && str.charAt(mid + 1) == "z";
    }
    if (str.charAt(mid - 1) == "y") {
      return str.charAt(mid - 2) == "x" && str.charAt(mid) == "z";
    }
    return false;
  }
  if (str.charAt(mid) == "y") {
    return str.charAt(mid - 1) == "x" && str.charAt(mid + 1) == "z";
  }
  return false;
}
console.log(xyzMiddle("AAxyzBB")); // → true
console.log(xyzMiddle("AxyzBB")); // → true
console.log(xyzMiddle("AxyzBBB")); // → false

//A sandwich is two pieces of bread with something in between.
// Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.
function getSandwich(str) {
  let find = "bread";
  let firstIndex = str.indexOf(find);
  let lastIndex = str.lastIndexOf(find);
  return lastIndex != -1 && firstIndex != lastIndex
    ? str.substring(firstIndex + find.length, lastIndex)
    : "";
}
console.log(getSandwich("breadjambread")); // → "jam"
console.log(getSandwich("xxbreadjambreadyy")); // → "jam"
console.log(getSandwich("xxbreadyy")); // → ""

// Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.
function sameStarChar(str) {
  for (let i = 1; i < str.length - 1; i++) {
    if (str.charAt(i) === "*") {
      if (str.charAt(i - 1) != str.charAt(i + 1)) return false;
    }
  }
  return true;
}
console.log(sameStarChar("xy*yzz")); // → true
console.log(sameStarChar("xy*zzz")); // → false
console.log(sameStarChar("*xa*az")); // → true

// Given a string, compute a new string by moving the first char to come after the next two chars, so "abc" yields "bca".
// Repeat this process for each subsequent group of 3 chars, so "abcdef" yields "bcaefd". Ignore any group of fewer than 3 chars at the end.
function oneTwo(str) {
  let s = "";
  let c = "";
  for (let i = 0; i <= str.length; i++) {
    if (i % 3 == 0) {
        s += c;
        c = str.charAt(i);
    } else {
      s += str.charAt(i);
    }
  }
  return s;
}
console.log(oneTwo("abc")); // → "bca"
console.log(oneTwo("tca")); // → "cat"
console.log(oneTwo("tcagdo")); // → "catdog"

// Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'.
// Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".
function zipZap(str) {
  if (str.length < 3) return str;
  let s = "";
  let i = 0;
  for (; i <= str.length - 3; i++) {
    if (str.charAt(i) == "z" && str.charAt(i + 2) == "p") {
      s += "zp";
      i += 2;
      continue;
    }
    s += str.charAt(i);
  }
  if (i < str.length) {
    s += str.substring(i);
  }
  return s;
}
console.log(zipZap("zipXzap")); // → "zpXzp"
console.log(zipZap("zopzop")); // → "zpzp"
console.log(zipZap("zzzopzop")); // → "zzzpzp"

// Return a version of the given string, where for every star (*) in the string the star and the chars immediately to its left and right are gone.
// So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
function starOut(str) {
    let res = "";
    for(let i =0; i <= str.length; i++) {
        if(str.charAt(i-1) != "*" && str.charAt(i) != "*" && str.charAt(i+1) != "*")
        res += str.charAt(i);
    }
    return res;
}

console.log(starOut("ab*cd")); // → "ad"
console.log(starOut("ab**cd")); // → "ad"
console.log(starOut("sm*eilly")); // → "silly"

// Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses ("+"),
// except for appearances of the word string which are preserved unchanged.
function plusOut(str, word) {
    let i =0;
    let s = "";
    for(; i <= str.length - word.length;) {
        if(check(str, word, i))  {
            s += word;
            i += word.length;
        }
        else {
            s += "+";
            i++;
        }
    }  
    for(; i < str.length;  i++) {
        s += "+";
    }

    function check(s, k, p) {
        let i = 0;
        for(; i < k.length; i++) {
            if(k.charAt(i) != s.charAt(i + p))
                return false;
        }
        return i == k.length;
    }
    return s;
}

console.log(plusOut("12xy34", "xy")); // → "++xy++"
console.log(plusOut("12xy34", "1")); // → "1+++++"
console.log(plusOut("12xy34xyabcxy", "xy")); // → "++xy++xy+++xy"

// Given a string and a non-empty word string, return a string made of each char just before and just after every appearance of the word in the string.
//Ignore cases where there is no char before or after the word, and a char may be included twice if it is between two words.
function wordEnds(str, word) {
    let s = "";
    for(let i =0;  i<= str.length - word.length;) {
        if(check(str, word, i)) {
            s += str.charAt(i-1) + str.charAt(i+word.length);
            i+= word.length;
        }
        else {
            i++;
        }
    }

    function check(s, k, p) {
        let i = 0;
        for(; i < k.length; i++) {
            if(k.charAt(i) != s.charAt(i + p)) {
                return false;
            }
        }
        return i == k.length;
    }
    return s;
}

console.log(wordEnds("abcXY123XYijk", "XY")); // → "c13i"
console.log(wordEnds("XY123XY", "XY")); // → "13"
console.log(wordEnds("XY1XY", "XY")); // → "11"
