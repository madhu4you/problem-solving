function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let sortedArr = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length) {
        if(left[i] <= right[j]) {
            sortedArr.push(left[i]);
            i++;
        }
        else if(left[i] > right[j]) {
            sortedArr.push(right[j]);
            j++;
        }
    }
    while(i < left.length) {
        sortedArr.push(left[i]);
        i++;
    }
    while(j < right.length) {
        sortedArr.push(right[j]);
        j++;
    }
    return sortedArr;
}

console.log(mergeSort([5,3,2,7,1,6,9]));