/**
 * Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".
 * changePi("xpix") → "x3.14x"
 * changePi("pipi") → "3.143.14"
 * changePi("pip") → "3.14p"
 */

let changePi = (str) => {
    if(str.length < 1) return str;
    let subStr = str.slice(0, 1);
    let newStr = str.slice(1)
    if(str.slice(0, 2) === 'pi') {
        subStr = "3.14";
        newStr = str.slice(2);
    }
    return subStr + changePi(newStr);
}

console.log(changePi("xpix"));
console.log(changePi("pipi"));
console.log(changePi("pip"));