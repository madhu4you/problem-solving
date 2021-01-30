function helper(arr, start, end) {
    if(arr.length <=1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = helper(arr, start, mid);
    let right = helper(arr, mid+1, end);
    let i = start;
    let j = mid+1;
    let aux = [];
    while (i <= mid && j <=end) {
        if(arr[i] <= arr[j]) {
            aux.push(arr[i]);
            i++;
        }
        if(arr[i] > arr[j]) {
            aux.push(arr[j]);
            j++;
        }
    }
    //Gather all remaining elements
    while(i<=mid) {
        aux.push(arr[i]);
    }
    while(j<=end) {
        aux.push(arr[j]);
    } 
    arr = aux;
    return arr;
}