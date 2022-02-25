/**
 * 
 * Given an array of ints length 3, figure out which is larger, the first or last element in the array, 
 * and set all the other elements to be that value. Return the changed array.
 * @param {*} nums 
 * @returns 
 */
function maxEnd3(nums) {
    if(nums.length < 1) return [];
  let max = Math.max(nums[0], nums[nums.length - 1]);
  return nums.fill(max);
}


console.log(maxEnd3([1, 2, 3])) // → [3, 3, 3]
console.log(maxEnd3([11, 5, 9])) // → [11, 11, 11]
console.log(maxEnd3([2, 11, 3])) // → [3, 3, 3]

/**
 * Given an array of ints, return the sum of the first 2 elements in the array. 
 * If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.
 * @param {*} nums 
 */
function sum2(nums) {
  if(nums.length < 1) return 0;
  let sum = nums[0];
  if(nums[1]) {
      sum += nums[1];
  }
  return sum;
}

console.log(sum2([1, 2, 3])); // → 3
console.log(sum2([1, 1])); // → 2
console.log(sum2([1, 1, 1, 1])); // → 2