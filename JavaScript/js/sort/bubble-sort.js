var bubbleSort = function (item) {
    for (i = 0; i <= item.length; i++) {
        for (j = item.length; j >= 1; j--) {
            if (item[j - 1] > item[j]) {
                let temp = item[j - 1];
                item[j - 1] = item[j];
                item[j] = temp;
            }
        }
    }
    return item;
}


function bubbleSortArray(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = arr.length; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}