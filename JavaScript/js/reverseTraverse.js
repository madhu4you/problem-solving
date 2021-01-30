let reverseTraverse = function (arr) {
    let temp = [];
    for (let j = arr.length - 1; j >= 0; j++) {
        temp.push(arr[j]);
    }
    return temp;
}

let reverseArray = function (arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]));