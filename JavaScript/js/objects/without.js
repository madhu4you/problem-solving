/**
 * Task description: Write a method that returns a new object without provided properties
 * Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 * Task complexity: 2 of 5
 * @param {Object} object - Any object
 * @param {?} args - list of properties to remove from object
 * @returns {Object} - New object without listed values
 */
const without = (object, ...args) => {
  let newObj = {...object};
  args.forEach(element => {
    delete newObj[element];
  });
  return newObj;
};