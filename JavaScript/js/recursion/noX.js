/**
 * Given a string, compute recursively a new string where all the 'x' chars have been removed.
 * noX("xaxb") → "ab"
 * noX("abc") → "abc"
 * noX("xx") → ""
 */

let noX = (str) => {
    if(str.length < 1) return str;
    let subStr = "";
    if(str.charAt(0) !== 'x') {
        subStr = str.slice(0, 1)
    }
    return subStr + noX(str.slice(1));
}


console.log(noX("xaxb"));
console.log(noX("abc"));
console.log(noX("xx"));