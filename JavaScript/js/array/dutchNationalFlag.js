/**
 * Input = a = [4,2,0,1,0,3,0] 
 * Output -> [0,0,0,4,1,2,3]
 */

function moveZerosAtStart(a) {
    let pivot = 0;
    let left = 0; // First Available Slot
    let i = 0;

    while(i  < a.length) {
        if(a[i] === pivot) {
            [a[left], a[i]] = [a[i], a[left]]; //Swap
            left++;
        }
        i++;
    }
    return a;
}

console.log(moveZerosAtStart([4,2,0,1,0,3,0]));

/**
 * Move Zeros to end
 * Input = a = [4,2,0,1,0,3,0] 
 * Output -> [4,1,2,3,0,0,0];
 */

function moveZeroesToEnd(a) {
    let pivot = 0;
    let rightSlot = a.length - 1;
    let i = 0;
    while(i  < a.length) {
        if(a[i] === pivot) {
            [a[rightSlot], a[i]] = [a[i], a[rightSlot]];
            rightSlot--;
        }
        else {
            i++;
        }
    }
    return a;
}
console.log(moveZeroesToEnd([4,2,0,1,0,3,0]));

/**
 * a = [5,2,4,4,6,4,4,3] and pivot = 4 
 * --> result = [3,2,4,4,4,4,5,6].
 */

 function dutchNationalFlag(a, pivot) {
     let leftSlot = 0;
     let rightSlot = a.length - 1;
     let i =  0;
     while(i <= rightSlot) {
         if(a[i] == pivot) {
             i++;
         }
         if(a[i] < pivot) {
             swap(i, leftSlot);
             leftSlot++;
             i++;
         }
         else if(a[i] > pivot) {
            swap(i, rightSlot);
            rightSlot--;
         }
     }

     function swap(x, y) {
        [a[x], a[y]] = [a[y], a[x]];
     }
     return a;
 }

 console.log(dutchNationalFlag([5,2,4,4,6,4,4,3], 4)); //[3,2,4,4,4,4,5,6]

 console.log(dutchNationalFlag([1,0,1,2,1,0,1,2], 1)); //[0,0,1,1,1,1,2,2]