/**
 * Given a string, compute recursively a new string where all the lowercase 'x' chars have been moved to the end of the string.
 * endX("xxre") → "rexx"
 * endX("xxhixx") → "hixxxx"
 * endX("xhixhix") → "hihixxx"
 */

let endX = (str) => {
    let subStr = "";
    if(str.length <=0) return subStr;
    let prefix = str.charAt(0);
    if(str.length > 1 && prefix === 'x') {
        subStr = 'x';
        prefix="";
    }
    return prefix + endX(str.slice(1)) + subStr;
}

console.log(endX("xxre"));
console.log(endX("xxhixx"));
console.log(endX("xhixhix"));