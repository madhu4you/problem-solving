/**
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 */
const flatten = (array) =>
  array.reduce((acc, value) => acc.concat(Array.isArray(value) ? flatten(value) : value), []);
const flatArr = [1, 2, [3, 4, [5]]];
console.log(flatten(flatArr)); // [1, 2, 3, 4, 5]
