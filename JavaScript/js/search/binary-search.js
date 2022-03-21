let binarySearch = (obj, key) => {
    if(null === obj || null === key) return false;
    obj = obj.sort((a, b) => a-b);
    
    function bHelper(obj, key, start, end) {
        if(start > end) return false;

        let mid = Math.floor((start + end) / 2);
        if(obj[mid] === key) {
            return true;
        }
        else if(key < obj[mid]) {
            return bHelper(obj, key, start, mid -1);
        }
        else if(key > obj[mid]) {
            return bHelper(obj, key, mid + 1, end);
        }
    }
    return bHelper(obj, key, 0, obj.length);
}

console.log(binarySearch([3, 2, 1, 4, 5, 6, 8, 9], 9));