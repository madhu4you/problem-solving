/**
 * Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".
 * pairStar("hello") → "hel*lo"
 * pairStar("xxyy") → "x*xy*y"
 * pairStar("aaaa") → "a*a*a*a"
 */

let pairStar = (str) => {
    let star = ''
    if(str.length <= 0) return star;
    if(str.charAt(0) === str.charAt(1)) {
        star = '*';
    }
    return str.charAt(0) + star + pairStar(str.slice(1));
}

console.log(pairStar("hello"));
console.log(pairStar("xxyy"));
console.log(pairStar("aaaa"));