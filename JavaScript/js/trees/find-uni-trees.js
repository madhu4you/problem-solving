let BinaryTree = function () {
    let Node = function (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    function canSameValueTree(node) {
        if (root == NULL) {
            return 0;
        }
        return countSVT(node) + canSameValueTree(node.left_ptr) + canSameValueTree(node.right_ptr);
    }

    function countSVT(node) {
        if (node === null) return 1;
        let isLeft = countSVT(node.left_ptr, count);
        let isRight = countSVT(node.right_ptr, count);
        if (!isLeft || !isRight) return 0;
        if (node.left_ptr !== null && node.left_ptr.val != node.val) return 0;
        if (node.right_ptr !== null && node.right_ptr.val != node.val) return 0;
        return 1;
    }
}

function findSingleValueTrees(root) {
    if (root === null) {
        return 0;
    }
    return isUniValTree(root, root.val) + findSingleValueTrees(root.left_ptr) + findSingleValueTrees(root.right_ptr);
}

function isUniValTree(node, val) {
    if (node === null) {
        return 1;
    }
    // current node value is not equal to the parent node value.
    if (node.val != val) {
        return 0;
    }
    // left subtree is not unival tree
    if (!isUniValTree(node.left_ptr, val)) {
        return 0;
    }
    // right subtree is not unival tree
    if (!isUniValTree(node.right_ptr, val)) {
        return 0;
    }
    return 1;
}