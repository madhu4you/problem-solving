/*
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left_ptr = null;
            this.right_ptr = null;
        }
    }
*/

/*
 * Complete the function below.
 * Without recursion
 * Print Leaf node without left & right
 * Print Right Node
 * Print Left Node
 * Print Root Node
 */

function postorderTraversal(root) {
    let stack = [];
    let result = [];
    if(root === null) return;
    stack.push(root);
    while(stack.length !== 0) {
        let node  = stack[stack.length - 1];
        if(!node.left_ptr && !node.right_ptr) {
            result.push(stack.pop().val);
        }
        if(node.right_ptr !== null) {
            stack.push(node.right_ptr);
            node.right_ptr = null;
        }
        if(node.left_ptr !== null) {
            stack.push(node.left_ptr);
            node.left_ptr = null;
        }
    }
    return result;
}