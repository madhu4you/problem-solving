/** 
 * https://www.geeksforgeeks.org/cutting-a-rod-dp-13/
 * Given a rod of length n inches and an array of prices that contains prices of all pieces of size smaller than n. Determine the maximum value obtainable by cutting up the rod and selling the pieces. For example, if length of the rod is 8 and the values of different pieces are given as following, then the maximum obtainable value is 22
 * let price = [1, 5, 8, 9, 10, 17, 17, 20]; 
 * length = 5 
 */

function cutRod(price, n) 
{ 
   if (n <= 0) 
     return 0; 
   let max_val = Number.MIN_SAFE_INTEGER; 
   // Recursively cut the rod in different pieces and compare different  
   // configurations 
   for (let i = 0; i < n; i++) 
         max_val = Math.max(max_val, price[i] + cutRod(price, n-i-1)); 
  
   return max_val; 
}

function cuttingRod(price, length) {
    let val = [];
    val[0] = 0;
    for (let i = 1; i <= length; i++) {
        let max_val = Number.MIN_SAFE_INTEGER;
        for (let j = 0; j < i; j++) {
            max_val = Math.max(max_val,  price[j] + val[i-j-1]); 
        }
        val[i] = max_val;
    }
    return val[length];
}