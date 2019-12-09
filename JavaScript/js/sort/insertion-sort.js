var insertionSort = function (item) {
    for (i = 1; i < item.length; i++) {
        temp = item[i];
        let j = i - 1;
        while (j >= 0 && item[j] > temp) {
            item[j + 1] = item[j];
            j--;
        }
        item[j + 1] = temp;
    }
    return item;
}

let insertionSortArray = function (item, n) {
    if (n === undefined) n = item.length;
    if (n <= 1) return item;
    let j = n - 1;
    while (j >= 1 && item[j] > item[j + 1]) {
        let temp = item[j];
        item[j] = item[j + 1];
        item[j + 1] = temp;
        j--;
    }
    insertionSortArray(item, n - 1);
    return item;
}

function insertionSortElement(item) {
    for (i = 1; i < item.length; i++) {
        let temp = item[i];
        let j = i - 1;
        while (j >= 0 && item[j] > temp) {
            item[j + 1] = item[j];
            j--;
        }
        item[j + 1] = temp;
    }
    return item;
}