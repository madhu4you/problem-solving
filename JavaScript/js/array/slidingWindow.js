/**
 * Given an array of integers A, find the sum of each sliding window of size K.
 * input = [1,2,3,4,2,4,6,4,3,2,5,4,3,2,5,6,3];
 */

function slidingWindowSum(a, k) {
    let q = new Array();
    let sum = 0;
    let output = new Array();
    for (let i = 0; i < a.length; i++) {
        if (q.length === k) {
            let last = q.shift();
            sum -= last;
        }
        q.push(a[i]);
        sum += a[i];
        if (q.length === k) {
            output.push(sum);
        }
    }
    return output;
}

console.log(slidingWindowSum([1, 2, 3, 4, 2, 4, 6, 4, 3, 2, 5, 4, 3, 2, 5, 6, 3], 3));


function slidingWindowSum2(a, k) {
    let sum = 0;
    let output = new Array();
    for (let i = 0; i < k; i++) {
        sum += a[i];
    }
    output.push(sum);
    for (let i = k; i < a.length; i++) {
        sum += a[i];
        sum -= a[i - k];
        output.push(sum);
    }
    return output;
}

console.log(slidingWindowSum2([1, 2, 3, 4, 2, 4, 6, 4, 3, 2, 5, 4, 3, 2, 5, 6, 3], 3));

/**
 * Given an array of positive integers, find a subarray that sums to a given number X.
 * For e.g, input = [1,2,3,5,2] and X=8, Result = [3,5] (indexes 2,3)
 */

function subarraySum(a, target) {
    let sum = a[0];
    let start = 0;
    let end = 0;
    while (start < a.length) {
        if (start > end) { // start inched forward, bring end back to start
            end = start;
            sum = a[start];
        }

        if (sum < target) {
            if (end == a.length - 1)
                break;

            end++;
            sum = sum + a[end];
        }
        else if (sum > target) {
            sum = sum - a[start];
            start++;
        }
        else {
            return [start, end];
        }
    }
    return null;
}

console.log(subarraySum([1, 2, 3, 5, 2], 8));