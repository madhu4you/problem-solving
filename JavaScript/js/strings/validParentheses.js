/** 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false 

Constraints:
    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.
*/

let isValid = (str) => {
  if (str === "") return false;
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      stack.push(str[i]);
      continue;
    }
    let ele = stack.pop();
    if (
      (ele === "(" && str[i] !== ")") ||
      (ele === "[" && str[i] !== "]") ||
      (ele === "{" && str[i] !== "}")
    ) {
      return false;
    }
  }
  return stack.length <= 0;
};

console.log(isValid("(]"));
console.log(isValid("()[]{}"));
