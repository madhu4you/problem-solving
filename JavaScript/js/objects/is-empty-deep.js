/**
 * Task description: Write a method that makes a deep check is an object empty
 * Empty element[i]s: '', null, NaN, undefined, [], {}
 * Expected Result: ({}) => true, ({ a: { b: undefined } }) => true, ({ a: { b: [] } }) => true
 * Task complexity: 3 of 5
 * @param {?} element - Object with element[i]s of any data types
 * @returns {boolean}
 */
const isEmptyDeep = (element) => {
  if (element === null) return true;
  // Check with array
  if (Array.isArray(element)) {
    if (element.length === 0) return true;
    let result;
    for (let i = 0; i < element.length; i++) {
      if (
        typeof element[i] === "boolean" ||
        (typeof element[i] === "number" && !Number.isNaN(element[i])) ||
        (typeof element[i] === "string" && element[i] !== "")
      ) {
        result = false;
        break;
      }
      if (
        Array.isArray(element[i]) ||
        (typeof element[i] === "object" && element[i] != "null")
      ) {
        result = isEmptyDeep(element[i]);
        break;
      }
    }
    return result;
  }

  //Check with object
  if (typeof element === "object") {
    const objKeys = Object.keys(element);
    if (objKeys.length === 0) return true;
    let result;
    for(let i =0; i < objKeys.length; i++) {
      const value = element[objKeys[i]];
      if (
        typeof value === "boolean" ||
        (typeof value === "number" && !Number.isNaN(value)) ||
        (typeof value === "string" && value !== "")
      ) {
        result = false;
        break;
      }
      if (
        Array.isArray(value) ||
        (typeof value === "object" && value != "null")
      ) {
        result = isEmptyDeep(value);
        break;
      }
    }
    return result;
  }
};
