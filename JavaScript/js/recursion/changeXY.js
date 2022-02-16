/**
 * Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.
 * changeXY("codex") → "codey"
 * changeXY("xxhixx") → "yyhiyy"
 * changeXY("xhixhix") → "yhiyhiy"
 */

let changeXY = (str) => {
    if(str.length < 1) return str;
    let replaceStr = 'y';
    if(str.charAt(0) !== 'x') {
        replaceStr = str.slice(0, 1);
    }
    return replaceStr + changeXY(str.slice(1));
}

console.log(changeXY("xhixhix"));
console.log(changeXY("xxhixx"));
console.log(changeXY("codex"));

