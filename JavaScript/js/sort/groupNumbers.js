/** 
 * Input Format:
 * The first line of input should contain an integer n, denoting size of input array arr.In next n lines, ith line should contain an integer arr[i], denoting a value at index i of arr.
 * 
 * If n = 4 and arr = [1, 2, 3, 4], then input should be:
 * Output Format:
 * There will be n lines of output, where ith line contains an integer res[i], denoting value at index i of res.
 * Here, res is the result array returned by solution function.
 For input n = 4 and arr = [1, 2, 3, 4], output will be: [4, 2, 3, 1]
*/

function solve(arr) {
    if (arr.length <= 0) return false;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        if (arr[right] % 2 === 0) {
            [arr[right], arr[left]] = [arr[left], arr[right]];
            left++;
        } else {
            right--;
        }
    }
    return arr;
}