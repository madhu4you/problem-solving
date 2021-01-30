function modSort(arr) {
    let left = 0;
    let right = arr.length - 1;
    let res = []
    let index = right;
    while (left < right) {
        let square1 = Math.pow(arr[left], 2);
        let square2 = Math.pow(arr[right], 2);
        if (square1 < square2) {
            res[index--] = square2;
            right--;
        } else if (square1 > square2) {
            res[index--] = square1;
            left++;
        }
    }
    return res;
}

console.log(modSort([-4, -2, -1, 0, 3, 5]));