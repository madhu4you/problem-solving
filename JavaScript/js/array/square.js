/**
 * input = [-4, -2, -1, 0, 3, 5];
 * output = [0, 1, 4, 9, 16, 25]
 */
function squre(nums) {
    if(nums.length <=0 || null === nums) return nums;
    let left = 0;
    let right = nums.length-1;
    let output = new Array(nums.length);
    let i = nums.length - 1;
    while(left <= right) {
        if(Math.abs(nums[left]) > Math.abs(nums[right])) {
            output[i] = Math.pow(nums[left], 2);
            left++;
        }
        else {
            output[i] = Math.pow(nums[right], 2);
            right--;
        }
        i--;
    }
    return output;
}
console.log(squre([-4, -2, -1, 0, 3, 5]));