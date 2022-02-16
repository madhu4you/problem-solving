/**
 * Task description: Write a method that returns a deep array like [[key, value]]
 * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 * Task complexity: 1 of 5
 * @param {Object} object - Any object to transform into array
 * @returns {Array} - a deep array
 */
const makePairs = (object) => Object.entries(object);

const makePairs2 = (object) => Object.keys(object).map((value) => [value, object[value]]);

const makePairs3 = (object) => {
  let result = [];
  for(const key in object) {
    if(object.hasOwnProperty(key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
}