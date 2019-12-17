function isBST(root) {
    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function helper(node, min, max) {
    if (node === null) return true; // Root is null tree itself is Binary tree
    if (node.val > max || node.val < min) return false;
    return helper(node.right_ptr, node.val, max) && helper(node.left_ptr, min, node.val);
}