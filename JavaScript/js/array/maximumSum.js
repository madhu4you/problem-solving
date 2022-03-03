/**
 * Kadane's Problem
 * Input [1,2,-1,2,-3,2,-5]
 * Output: Return (0,3)
 */
function maximumSumSubarray(a) {
   let maxSum = a[0]; 
   let maxIndex =  0;
   let sum = a[0];
    for(let i =1; i< a.length; i++) {
        sum = Math.max(sum + a[i], a[i]);
        if(sum > maxSum) {
            maxSum = sum;
            maxIndex = i;
        }
    }
    let target = maxSum;
    let minIndex = maxIndex;
    while(target > 0) {
        target -= a[minIndex--];
    }
    return [minIndex+1, maxIndex];
}

console.log(maximumSumSubarray([1,2,-1,2,-3,2,-5]));