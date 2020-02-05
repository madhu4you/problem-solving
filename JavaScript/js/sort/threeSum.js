function findZeroSum(arr) {
    if (arr.length < 1) return arr;
    arr.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }
        let start = i + 1;
        let end = arr.length - 1;
        while (start < end) {
            const sum = arr[i] + arr[start] + arr[end];
            if (sum > 0) {
                end--;
            } else if (sum < 0) {
                start++;
            } else {
                result.push([arr[i], arr[start], arr[end]]);
                while (start < end && arr[start] === arr[start + 1]) {
                    start++;
                }
                while (start < end && arr[end] === arr[end - 1]) {
                    end--;
                }
                start++;
                end--;
            }
        }
    }
    return result;
}