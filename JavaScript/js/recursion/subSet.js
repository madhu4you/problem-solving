/**
 * subSet([1,2,3])
 * Output:
 * [[], [1], [2], [3], [1,2],[2,3],[1,3], [1,2,3]];
 */

function subSet(nums) {
    if(nums.length < 1) return false;
    let result = [];
    let sHelper = (i, set) => {
        if(i === nums.length) {
            result.push([...set]);
            return;
        }
        else {
            sHelper(i+1, set);
            set.push(nums[i]);
            sHelper(i+1, set);
            set.pop(nums[i]);
        }
    }
    sHelper(0, []);
    return result;
}

console.log(subSet([1,2,3]));