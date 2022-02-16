/**
 * Given a string, compute recursively (no loops) the number of times lowercase "hi" appears in the string.
 * countHi("xxhixx") → 1
 * countHi("xhixhix") → 2
 * countHi("hi") → 1
 */

let countHi = (str) => {
    if(str.length < 2) return 0;
    let counter = 0;
    let subStr = str.slice(1);
    if(str.slice(0, 2) === "hi") {
        counter+=1;
        subStr = str.slice(2);
    } 
    return counter + countHi(subStr);
}

console.log(countHi("xhixhix"));