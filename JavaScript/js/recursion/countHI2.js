/**
 * Given a string, compute recursively the number of times lowercase "hi" appears in the string, however do not count "hi" that have an 'x' immedately before them.
 * countHi2("ahixhi") → 1
 * countHi2("ahibhi") → 2
 * countHi2("xhixhi") → 0
 */


let countHi2 = (str) => {
    if(str.length < 3) return 0;
    if(str.charAt(0) !== 'x' && str.substring(1, 3) === 'hi') 
        return 1 + countHi2(str.substring(2));
    return countHi2(str.substring(1));
}

console.log(countHi2("ahixhi"));
console.log(countHi2("ahibhi"));
console.log(countHi2("xhixhi"));