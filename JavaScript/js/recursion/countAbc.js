/**
 * Count recursively the total number of "abc" and "aba" substrings that appear in the given string.
 * countAbc("abc") → 1
 * countAbc("abcxxabc") → 2
 * countAbc("abaxxaba") → 2
 */

let countAbc = (str) => {
    if(str.length < 3) return 0;
    let substr = str.slice(1);
    let counter = 0;
    let left = str.slice(0, 3);
    if(left === 'abc' || left === 'aba') {
        substr = str.slice(3);
        counter = 1;
    }
    return counter + countAbc(substr);
}


console.log(countAbc("abc"));
console.log(countAbc("abcxxabc"));
console.log(countAbc("abaxxaba"));