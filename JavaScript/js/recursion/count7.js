/**
 * Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. 
 * (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).
 * count7(717) → 2
 * count7(7) → 1
 * count7(123) → 0
 */

let count7 = (n) => {
    if(n < 1) return 0;
    let counter = 0;
    if(n % 10 === 7) counter = 1;
    return counter + count7(parseInt(n / 10));
}

console.log(count7(717));