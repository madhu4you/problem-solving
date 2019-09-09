/*
Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function(n) {
    var newArr = n.toString(2).split('').map(Number);
      var count = 0;
      for (var i=0; i<newArr.length; i++) {
          count += newArr[i];
      }
      return count; 
  };
/** 
 * Simple answer
  function countBits(n) {
    for(c=0; n; n>>=1) c+=n&1;
    return c;
  }
*/
//Example
//countBits(0) => 0
//countBits(4) => 1
//countBits(7) => 3
//countBits(9) => 2
//countBits(10) => 2