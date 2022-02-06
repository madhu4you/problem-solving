/**
 * Given an array of ints, is it possible to divide the ints into two groups, so that the sums of the two groups are the same. 
 * Every int must be in one group or the other. Write a recursive helper method that takes whatever arguments you like, 
 * and make the initial call to your recursive helper from splitArray(). (No loops needed.)
 * https://github.com/ozelentok/CodingBat-Solutions/blob/master/Java/Recursion-2.java
 * 
 * splitArray([2, 2]) → true
 * splitArray([2, 3]) → false
 * splitArray([5, 2, 3]) → true
 */

let splitArray = (nums) => {
    if(nums.length <=0) return false;
    return helper(0, nums, 0);
}

function helper(index, nums, balance) {
    if(index === nums.length) 
        return (balance === 0);
    if(helper(index+1, nums, balance + nums[index]))
        return true;
    return helper(index+1, nums, balance - nums[index]);
}