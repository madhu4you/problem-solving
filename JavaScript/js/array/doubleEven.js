/**
 * input = [1,2,3,4,5];
 * output = [1,2,2,3,4,4,5];
 */

function doubleEven(nums) {
    if(nums.length <=0 || null === nums) return nums;
    for(let i = nums.length-1; i >=0; i--) {
        if(nums[i] % 2 === 0) {
            nums[i+1] = nums[i];
            i--;
        }
        else {
            nums[i+1] = nums[i];
        }
    }
    return nums;
}

console.log(doubleEven([1,2,3,4,5]));