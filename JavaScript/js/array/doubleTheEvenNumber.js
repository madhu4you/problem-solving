function doubleTheEvenNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            for (let j = arr.length - 1; j > i; j--) {
                arr[j + 1] = arr[j];
            }
            arr[i + 1] = arr[i];
            i++;
        }
    }
    return arr;
}

console.log(doubleTheEvenNumber([1, 2, 3, 4, 5, 6]));