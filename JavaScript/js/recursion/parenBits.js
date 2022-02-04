/**
 * Given a string that contains a single pair of parenthesis, compute recursively a new string made of only of the parenthesis and their contents, so "xyz(abc)123" yields "(abc)".
 * parenBit("xyz(abc)123") → "(abc)"
 * parenBit("x(hello)") → "(hello)"
 * parenBit("(xy)1") → "(xy)"
 * https://github.com/ozelentok/CodingBat-Solutions/blob/master/Java/Recursion-1.java
 */

let parenBit = (str) => {
    let len = str.length;
    if(str.charAt(0) !== '(') {
        if(str.charAt(len - 1) !== ')')
        return parenBit(str.substring(1, len-1));
        else
        return parenBit(str.substring(1));
    }
    if(str.charAt(len - 1) !== ')')
    return parenBit(str.substring(0, len - 1));
    return str;
}

console.log(parenBit("xyz(abc)123"));
console.log(parenBit("x(hello)"));
console.log(parenBit("(xy)1"));