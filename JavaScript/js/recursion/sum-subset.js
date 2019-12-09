/*
- Find the set of number which sum = 3
- input {1, 2, 3}
*/
function countSubset(input, targetSum) {
    return countSubsetHelper(input, targetSum, 0, 0);
}

function countSubsetHelper(input, targetSum, sum, i) {
    if(sum === targetSum) return 1;
    if(i === input.length || sum > targetSum) return 0;
    return countSubsetHelper(input, targetSum, sum + input[i], i+1) + countSubsetHelper(input, targetSum, sum, i+1);
}

console.log(countSubset([1,2,3], 3));