function merger_first_into_second(arr1, arr2) {
    /*
     * Write your code here.
     */
    let lastIndex1 = arr1.length - 1;
    let lastIndex2 = lastIndex1;
    let writePointer = arr2.length - 1;

    while (writePointer >= 0) {
        //Step 1. If arr1 is finished move all the arr2 values
        if (lastIndex1 < 0) {
            arr2[writePointer--] = arr2[lastIndex2--];
        } else if (lastIndex2 < 0) {
            arr2[writePointer--] = arr1[lastIndex1--];
        } else if (arr1[lastIndex1] <= arr2[lastIndex2]) {
            arr2[writePointer--] = arr2[lastIndex2--];
        } else {
            arr2[writePointer--] = arr1[lastIndex1--];
        }
    }

}