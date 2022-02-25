/**
 * Given an array of ints, compute recursively the number of times that the value 11 appears in the array.
 * We'll use the convention of considering only the part of the array that begins at the given index.
 * In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.
 * array11([1, 2, 11], 0) → 1
 * array11([11, 11], 0) → 2
 * array11([1, 2, 3, 4], 0) → 0
 */

let array11 = (nums, index) => {
    let counter = 0;
    if(index > nums.length) return counter;
    if (nums[index] === 11) 
        counter+=1;
    return counter + array11(nums, index+1);
};
console.log(array11([1, 2, 11], 0));
console.log(array11([11, 11], 0));
console.log(array11([1, 2, 3, 4], 0));
