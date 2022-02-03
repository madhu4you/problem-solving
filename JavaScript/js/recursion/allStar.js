/**
 * Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*".
 * allStar("hello") → "h*e*l*l*o"
 * allStar("abc") → "a*b*c"
 * allStar("ab") → "a*b"
 */

let allStar = (str) => {
    let star = '';
    if(str.length <= 0) return star;
    if (str.length > 1 && str.charAt(0) != "") {
        star = '*'
    }
    return str.charAt(0) + star + allStar(str.slice(1));
}

console.log(allStar("hello"));
console.log(allStar("abc"));
console.log(allStar("ab"));