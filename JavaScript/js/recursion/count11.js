/**
 * Given a string, compute recursively (no loops) the number of "11" substrings in the string. The "11" substrings should not overlap.
 * count11("11abc11") → 2
 * count11("abc11x11x11") → 3
 * count11("111") → 1
 */

let count11 = (str) => {
    if(str.length < 2) return 0;
    let counter = 0;
    let newStr = str.substring(1);
    if(str.substring(0, 2) === "11") {
        counter = 1;
        newStr = str.substring(2);
    }
    return counter + count11(newStr)
}

console.log(count11("11abc11"));
console.log(count11("abc11x11x11"));
console.log(count11("111"));