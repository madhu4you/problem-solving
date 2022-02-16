/**
 * Given an array of ints, is it possible to choose a group of some of the ints, such that the group sums to the given target with these additional 
 * constraints: all multiples of 5 in the array must be included in the group. 
 * If the value immediately following a multiple of 5 is 1, it must not be chosen. (No loops needed.)
 * 
 * groupSum5(0, [2, 5, 10, 4], 19) → true
 * groupSum5(0, [2, 5, 10, 4], 17) → true
 * groupSum5(0, [2, 5, 10, 4], 12) → false
 */

let groupSum5 = (start, nums, target) => {
    if(start >= nums.length) {
        if(target === 0) return true;
        return false;
    }

    if(nums[start] % 5 === 0) {
        return groupSum5(start + 1,  nums, target-nums[start]);
    }
    if(groupSum5(start+1, nums, target - nums[start]))
    return true;
    return groupSum5(start + 1, nums, target);
}

console.log(groupSum5(0, [2, 5, 10, 4], 19));
console.log(groupSum5(0, [2, 5, 10, 4], 17));
console.log(groupSum5(0, [2, 5, 10, 4], 12));