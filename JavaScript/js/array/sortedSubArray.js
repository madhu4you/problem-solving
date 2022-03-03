/**
 * input = [0,2,3,1,8,6,9];
 * ouput = [2,3,1,8,6];
 */
function sortedSubArrary(nums) {
    let start;
    let end;
    //Find Dip
    for (start = 0; start < nums.length; start++) {
        if(nums[start+1] < nums[start])
        break;
    }
    //No DIP found, Array is already sorted
    if(start === nums.length -1) {
        return null;
    }
    //Find Bump
    for(end = nums.length -1; nums >=0; nums--) {
        if(nums[end-1] > nums[end])
        break;
    }
   let min = Number.MAX_SAFE_INTEGER; 
   let max = Number.MIN_SAFE_INTEGER;
   for(let k = start; k<=end; k++) {
       if(nums[k] > max) {
           max = nums[k]
       }
       if(nums[k] < min) {
           min = nums[k];
       }
   }
   while(start >0 && nums[start - 1] > min) {
       start --;
   }
   while(end < nums.length - 1 && nums[end + 1] < max) {
       end++;
   }
   return nums.slice(start, end);
}

console.log(sortedSubArrary([0,2,3,1,8,6,9]));