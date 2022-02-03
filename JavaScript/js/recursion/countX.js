/**
 * Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.
 * countX("xxhixx") → 4
 * countX("xhixhix") → 3
 * countX("hi") → 0
 */

let countX = (str) => {
    if(str.length < 1) return 0;
    let counter = 0;
    if(str.charAt(0) === "x") {
        counter += 1;
    }
    return counter + countX(str.slice(1));
}

console.log(countX("xhixhixx"));