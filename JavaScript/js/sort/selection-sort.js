function selectionSort(item) {
    for (i = 0; i < item.length; i++) {
        let minI = i;
        for (j = i + 1; j < item.length; j++) {
            if (item[j] < item[minI]) {
                minI = j;
            }
        }
        if (i != minI) {
            let temp = item[i];
            item[i] = item[minI];
            item[minI] = temp;
        }
    }
    return item;
}

function selectionSortArray(arr) {
    for (i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}