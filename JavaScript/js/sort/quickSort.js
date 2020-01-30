function sort(arr) {
    function quicksort(arr, start, end) {
        if (arr.length <= 0) return false;

        let index = partion(arr, start, end);
        if (start < index - 1) {
            quicksort(arr, start, index - 1);
        }
        if (index < end) {
            quicksort(arr, index, end);
        }
        return arr;
    }

    function partion(arr, left, right) {
        var pivot = arr[Math.floor((right + left) / 2)], //middle element
            i = left, //left pointer
            j = right; //right pointer
        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(arr, i, j); //swap two elements
                i++;
                j--;
            }
        }
        return i;
    }
    return quicksort(arr, 0, arr.length - 1);
}

console(sort([3, 4, 5, 2, 1]));