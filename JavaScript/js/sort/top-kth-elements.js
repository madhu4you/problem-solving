function topK(arr, k) {
    arr = uniqueArray(arr);
    arr = quickSort(arr);
    return arr.splice(0, k);
}

function uniqueArray(arr) {
    let unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}

function selectionSort(arr) {
    if (arr.length < 0) return null;
    for (let i = 0; i < arr.length; i++) {
        let minI = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                minI = j;
            }
        }
        if (minI != i) {
            [arr[i], arr[minI]] = [arr[minI], arr[i]];
        }
    }
    return arr;
}

function bubbleSort(arr) {
    if (arr.length < 0) return null;
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
        }
    }
    return arr;
}

function insertionSort(arr) {
    if (arr.length < 0) return null;
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j] = temp;
    }
}

function mergeSort(arr) {
    if (arr.length < 0) return null;
    devideHelper(0, arr.length - 1);
    return arr;

    function devideHelper(start, end) {
        if (start >= end) return arr;
        let mid = Math.floor((start + end) / 2);
        devideHelper(start, mid);
        devideHelper(mid + 1, end);
        mergeHelper(start, mid, end);
    }

    function mergeHelper(start, mid, end) {
        let aux = [];
        let left = start;
        let right = mid + 1;
        while (left <= mid && right <= end) {
            if (arr[left] <= arr[right]) {
                aux.push(arr[left]);
                left++;
            } else if (arr[left] > arr[right]) {
                aux.push(arr[right]);
                right++;
            }
        }
        while (left <= mid) {
            aux.push(arr[left]);
            left++;
        }
        while (right <= end) {
            aux.push(arr[right])
            right++;
        }
        for (let i = 0; i <= aux.length; i++) {
            arr[start] = aux[i];
            start++;
        }
    }
}

function quickSort(arr) {
    if (arr.length <= 0) return null;
    quickSortHelper(0, arr.length - 1);
    return arr;

    function quickSortHelper(start, end) {
        let index = partion(start, end);
        if (start < index - 1) {
            quickSortHelper(start, index - 1);
        }
        if (end > index) {
            quickSortHelper(index, end);
        }

    }

    function partion(start, end) {
        let pivot = arr[Math.floor((start + end) / 2)];
        let left = start;
        let right = end;
        while (left < right) {
            while (arr[left] > pivot) {
                left++;
            }
            while (arr[right] < pivot) {
                right--;
            }
            if (left <= right) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
                left++;
                right--;
            }
        }
        return left;
    }
}