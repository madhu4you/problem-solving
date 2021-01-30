let twoSum = function (arr, target) {
    if (arr.length < 0) return null;
    let res = [];
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[i] + arr[j] === target) {
                res.push(arr[i]);
                res.push(arr[j]);
            }
        }
    }
    return res;
}
console.log(twoSum([1, 2, 3, 5, 6, 7, 8], 11));

let twoSumV2 = function (arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let res = [];
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        } else {
            res.push(arr[left]);
            res.push(arr[right]);
            return res;
        }
    }
}
console.log(twoSumV2([1, 2, 3, 5, 6, 7, 8], 11));