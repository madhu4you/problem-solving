/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */
//const reverse = (array) => array.reverse();
const reverse = (array) => array.map((value, index, givenArray) => givenArray[givenArray.length - index - 1] );
const arr = [1, 2, 3];
console.log(reverse(arr)); // [3, 2, 1]