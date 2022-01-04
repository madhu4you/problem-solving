/**
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 * Task Complexity: 2 of 5
 * @param {Array<string | number>} array - Array of primitive data types
 * @returns {Array}
 */
const unique = (array) => {
  let uniqueArr = [];
  array.forEach((value) => {
      !uniqueArr.includes(value) && uniqueArr.push(value);
  });
  return uniqueArr;
};

const unique2 = (array) => array.filter((value, id) => array.indexOf(value) === id);

const unique3 = (array) => Array.from(new Set(array));

const inputArr = [1, 2, 1, 2, 3];
console.log(unique(inputArr)); // [1, 2, 3]
console.log(unique2(inputArr)); // [1, 2, 3]
console.log(unique3(inputArr)); // [1, 2, 3]
