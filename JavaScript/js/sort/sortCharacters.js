function sort_array(arr) {
    arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    return arr;
}

function sort_array(arr) {
    return quickSort(arr, 0, arr.length - 1);

    function quickSort(arr, start, end) {
        if(arr.length < 0) return arr;
        let index = partion(start, end);
        if(start < index) {
            quickSort(start, index-1);
        }
        if(index < end) {
            quickSort(index, end);
        }
        return arr;
    }

    function partion(start, end) {
        let pivot = arr[Math.floor((start + end) / 2)];
        let left  = start;
        let right = end;
        while (left < right) {
            while(arr[left].charCodeAt(0) < pivot.charCodeAt(0)) {
                left++;
            }
            while(arr[right].charCodeAt(0) > pivot.charCodeAt(0)) {
                right--;
            }
            if(left <= right) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
                left++;
                right--;
            }
        }
        return left;
    }
}  