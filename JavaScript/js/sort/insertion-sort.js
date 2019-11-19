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