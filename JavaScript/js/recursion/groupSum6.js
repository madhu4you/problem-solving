/**
 * Given an array of ints, is it possible to choose a group of some of the ints, beginning at the start index, 
 * such that the group sums to the given target? However, with the additional constraint that all 6's must be chosen. (No loops needed.)
 * 
 * groupSum6(0, [5, 6, 2], 8) → true
 * groupSum6(0, [5, 6, 2], 9) → false
 * groupSum6(0, [5, 6, 2], 7) → false
 */

let groupSum6 = (start, nums, target) => {
    if(start === nums.length) {
        if(target === 0) return true;
        return false;
    }
    if(nums[start] === 6) {
        return groupSum6(start + 1, nums, target - nums[start])
    }
    if(groupSum6(start + 1, nums, target - nums[start]))
        return true;
    return groupSum6(start+1, nums, target);
}

console.log(groupSum6(0, [5, 6, 2], 8));
console.log(groupSum6(0, [5, 6, 2], 9));
console.log(groupSum6(0, [5, 6, 2], 7));