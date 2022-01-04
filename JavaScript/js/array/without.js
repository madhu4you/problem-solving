/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 * @param {Array} array - Array of primitive data types
 * @param {?} args list of values to remove
 * @returns {Array}
 */
//const without = (array, ...args) => array.filter((value) => !args.includes(value));
const without = (array, ...args) => {
  let filterArray = [...array];
  for(let i = 0; i < args.length; i++){
    filterArray = filterArray.filter((value) => value != args[i]);
  }
  return filterArray;
};

const dataArr = [1, 2, 3, 1, 2];
console.log(without(dataArr, 1, 2)); // [3]
