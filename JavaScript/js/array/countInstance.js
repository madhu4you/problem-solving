/**
 * Given array of nums count the occurance of a given number 
 * Ex: [6, 8,2,3, 6, 5, 2, 2, 3, 6, 4, 6]
 * Input: 6
 * Output: 4
 */

function countNums(arrs, n) {
    let count = 0
    arrs.forEach(element => {
        if(element === n) count++;
    });
    return count;
}
console.log(countNums([6, 8,2,3, 6, 5, 2, 2, 3, 6, 4, 6], 6));