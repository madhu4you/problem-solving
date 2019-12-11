/*
- Find the set of number which sum = 3
- input {1, 2, 3}
*/
function check_if_sum_possible(arr, k) {
    return sum_helper(arr, k, 0, 0, 0);
}

function sum_helper(input, targetSum, sum, index, nElement) {
    if(sum === targetSum && nElement > 0) return true;
    if(index === input.length) return 0;
    return sum_helper(input, targetSum, sum+input[index], index+1, nElement + 1) + sum_helper(input, targetSum, sum, index+1, nElement);
}

console.log(check_if_sum_possible([1,2,3], 3));


/*
 * Complete the function below.
 */
function targetSum(arr, k) {
    return targetSumHelper(0, arr, k, false);
   }
   
   function targetSumHelper(start, arr, remaining, at_lest_one_included)
   {
   
       if (start >= arr.length)
       {
           // remaining sum should be 0 and we should have included at least one number!
           return remaining === 0 && at_lest_one_included;
       }
       /*
       We are not including current element. So at_lest_one_included will be dependent on previous
       elements.
       */
       if (sumCheck(start + 1, arr, remaining, at_lest_one_included))
       {
           return true;
       }
       /*
       Include the current element. Now we have included at least one element so
       at_lest_one_included should be true.
       */
       return sumCheck(start + 1, arr, remaining - arr[start], true);
   }

